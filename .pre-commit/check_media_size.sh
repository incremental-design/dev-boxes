#!/bin/bash


# Check if the current directory ends with "pre-commit"
if [[ "$(pwd)" != */dev-boxes ]]; then
    echo $(pwd)
    echo "Error: This script should be run from the dev-boxes directory."
    exit 1
fi

NIX=$(pwd)/.pre-commit/nix

CWEBP="$($NIX eval --inputs-from $(pwd)/. --raw nixpkgs#libwebp)/bin/cwebp"
FFMPEG="$($NIX eval --inputs-from $(pwd)/. --raw nixpkgs#ffmpeg)/bin/ffmpeg"
FFPROBE="$($NIX eval --inputs-from $(pwd)/. --raw nixpkgs#ffmpeg)/bin/ffprobe"

check_image_size() {
    
    local image_file="$1"
    # Get the size of the image
    image_size=$(du -k "$image_file" | cut -f1)
    image_dims=$($CWEBP "$image_file" 2>&1 | grep Dimension | cut -c 12- | tr 'x' '*')
    image_px=$(( $image_dims ))
    compression_ratio=$(( image_px / image_size ))
    
    if [ $compression_ratio -lt 48000 ]; then
        echo "compress $image_file to $(( $image_px / 48000 ))kb or less"
        exit 1
    fi
}

check_video_size() {
    
    local video_file="$1"
    # Get the size of the video
    video_size=$(du -k "$video_file" | cut -f1)
    # Get the length of the video
    video_length=$($FFPROBE -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$video_file" | cut -d"." -f1) # floor to the number of seconds
    
    # Calculate the compression ratio
    compression_ratio=$((video_size / video_length))
    echo "Compression ratio: $compression_ratio"

    if [ $compression_ratio -gt 106 ]; then
        echo "compress $video_file to $(( $video_length * 106 ))kb or less"
        exit 1
    fi
}

# Check each file added to the commit
git diff --cached --name-only | while read file; do
    # Check if the file exists (it could have been deleted)
    if [ -f "$file" ]; then
        # Get the file extension
        file_extension="${file##*.}"
        # Check if it's an image file
        if [[ $file_extension == jpg || $file_extension == jpeg || $file_extension == png || $file_extension == gif ]]; then
            check_image_size "$file"
        # Check if it's a video file
        elif [[ $file_extension == mp4 || $file_extension == mov ]]; then
            check_video_size "$file"
        fi
    fi
done