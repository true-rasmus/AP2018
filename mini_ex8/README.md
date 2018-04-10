![ScreenShot](https://github.com/SilleKock/mini_ex/blob/master/mini_ex_8/Sk%C3%A6rmbillede%202018-04-08%20kl.%2019.44.54.png)

### URL to the program: https://rawgit.com/SilleKock/mini_ex/master/mini_ex_8/empty-example/index.html
### !! Api Data won't load running throught rawgit !!

## Gif:
![ScreenShot](https://media.giphy.com/media/piZ3vqImND986BGXk3/giphy.gif)


## API's
Going in to this subject (and miniex) I was worried the whole data exchange would be to complicated to understand. And it probably still is - but luckily different platforms seem to be 'willing' to share their data and have as such made it very approachable to work with their API's (Setup Guides and json formats)
Unfortunatley this also means, that I'm still not sure what the inner workings of an API are, but rather how to (if the suplying platform is working constraint-free) access and request data from them. The miniex did challenge my understanding of p5's functionality as hooking up functions, variables and loops wasn't quite as easy with APIdata compared to shapes, classes etc.
Using multiple .js files was not possible as an example.

Initially we wanted to do something with the Google API. But their API has alot of restrictions, for instance the maximum of 100 inqueries/day. This made it useless to work with in our miniex, as we capped the limit before testing the code 10 times.

- Looking at other API's, many had similar constraints, that you could only bypass by paying a fee.

This is of course because of the state of data-economy in this modern IT-era. We know that data is the new money&power equation..
I'm not sure whether I should be grateful, that these giants are 'willing' to offer some free acces, when they really don't have to (given the worth of data) or if I should be surprised at how cheap data access generally is.

Anyway, we decided to use OpenWeather as it had no limitation aswell as the added benefit of being featured on Shiffmans coding-reel.


I added and Interval instead of a Submit button. This auto-request the data every couple of frames effectively simulating movement, as it reloads the clouds position based on API data. This further adds a functionality where you can see if you've written the city name wrong - you also don't have to manually send the input to the program.

.... I initially tried to accomplish this by doing some conditional statements in the drawfunction. But after printing the framerate, i realized that the draw function only worked for 2 frames before freezing..
let me explain: var d++; - if i then print the value d it would show 1, then 2 and stop at 3... not advancing more frames.
Never figured out how to fix this, so i added the autoupdate in the index.html file.
