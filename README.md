%%

Start with WHY:

why does the code you are documenting exist?
What problem does it solve?
Why is is the best way to solve the problem?
Why does the problem need solving?
Back up your answer with quantitative and qualitative evidence, e.g.:
time saved
money saved
lines of code saved
future maintenance reduced
technical debt reduced
developer experience improved
follow up with HOW:

how can the reader use the code?
what are the prerequisites for running the code?
the answer should always be either docker or a virtual machine. Don't make your reader set up an entire environment.
how can the reader start the code?
what are the inputs to the code?
what are the outputs of the code?
how can the reader tell if the code is functioning as expected?
if there are failure cases, how can the reader tell that the code is failing?
SHOW, don't TELL:

Do NOT spend words coming up with clever analogies or context. That material is great for a blog post or video, but bad for the documentation included in a repository. Your reader wants to run the code, not read about the code. Help your reader get to 'hello world' as fast as possible.
DO make diagrams. A diagram can help your reader organize information, in ways that words alone can't.
DO NOT put more than 50 nodes and edges into a single diagram. It will turn into an indecepherable spaghetti-string mess. The simpler the diagram, the better.

%%
