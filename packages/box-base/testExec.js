#! /usr/local/bin/node

const c = 'hello world'

const logForever = () => {
  console.log(c)
  setTimeout(logForever, 1000)
}
logForever();