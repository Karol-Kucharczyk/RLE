# RLE Text File Compressor

A simple web-based project that demonstrates **Run-Length Encoding (RLE)** for compressing and decompressing text files directly in the browser.

This project allows users to upload or paste text, compress it using the RLE algorithm, and view/download the compressed output. It also supports decompression to restore the original text.

---

## Features

- Compress text files using Run-Length Encoding (RLE)
- Decompress previously compressed text
- Simple and responsive web interface
- Fast client-side processing
- No external backend required
- Great for learning basic data compression concepts

---

## What is Run-Length Encoding?

Run-Length Encoding (RLE) is a simple lossless compression algorithm that reduces file size by replacing repeated characters with a character followed by the number of repetitions.

### Example

**Original text**
```text
AAAAABBBCCDAA
```

**Compressed text**
```text
A5B3C2D1A2
```

RLE works best on data with many repeated characters.

---

## Technologies Used

- HTML
- CSS
- JavaScript

---

## Project Structure

```plaintext
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Check out here:

https://karol-kucharczyk.github.io/RLE/

---

## Use Cases

- Learning data compression algorithms
- Educational demonstrations
- Browser-based file processing experiments
- Beginner JavaScript projects

---

## License

This project is open source and available under the MIT License.

---

Made with ❤️ using JavaScript and Run-Length Encoding.
