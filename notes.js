// Add a filter to an image (png) for a web application: best to use CSS(Modern)
// But if it's for other things then CSS is not enough
// Canvas (API) for filters if web applications are not restricted platform
// Limitations for Canvas (API) is just for browsers

// Option 3 is to use PNGDecoder, going to work with any platform (lowest level option)
// Stucture of a PNG image is filled with metadata (hexdecimal)
// Class: PNG is a transform stream


/*
PHASE ONE
**use the library unzipper (it'll do 90% of work for you)**
read stream data from a zip file
pipe this to a transfrom stream
transfrom stream to unzip file
pipe them to a writeable stream
images will go to an extracted folder
put a .then after this phase is done

PHASE TWO
Read the extracted folder, return a LIST of all these images
fs.readdir only return png images (use a filtering)
[in.png, in1.png, in2.png]

PHASE THREE
**look at the pngjs documentation**
Take the images in the list and loop through them
first is take in.png and read stream the bits of this image 
and pipe to transfrom stream to take it to the pngdecoder (pngjs)
this will give you a dictionary of the data so we can work with
modify the pixels, use the formula to greyout the image
pipe it to a writeable stream to a folder called grayscaled
name the file (inModified.png)
*/



// const unzip = (pathIn, pathOut) => {};

// /* Description: read all the png files from given directory
// */
// const readDir = () => {}
// ["C:\\Users\\Juls\\......extracted\\in.png",
// "C:\\Users\\Juls\\......extracted\\in1.png,
// C:\\users......in2.png"]

// const grayScale = (pathIn, pathOut)