# Key-moji (Front-end) 

Live demo: http://key-moji.herokuapp.com

## Idea: 

I noticed there weren't any emoji keyboards. So I made one.

## Solution: 

I got inspiration from (TMI) using the bathroom, and seeing tiny hexagon tiles on the floor. It gave me inspiration to create a hexagon honey-comb design for the keyboard, built with vanilla CSS.

I got a json file of the emojis from a react app example found here (src/emojiList.json): https://github.com/ahfarmer/emoji-search

## What I learned: 

From this project, I really understood the concept and use of re-usable components (and super beneficial especially in this instance since there are components that are repeated a bunch of times, like the keyboard and hexagon components).

I discovered this super fun CSS property that is shown when a user hovers over each of the hexagons, or the keys of the keyboard. 
`filter: contrast(180%) hue-rotate(300deg) brightness(150%);`

And finally, how to work with keyCodes, which allows the keyboard to dynamically change to emojis.
