document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;
    document.getElementById('fileSize').textContent = `File Size: ${(file.size / 1024).toFixed(2)} KB`;
    file.text().then(text => {
        const encoded = rleEncode(text);
        const blob = new Blob([encoded], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('download');
        downloadLink.href = url;
        downloadLink.download = 'encoded.txt';
        downloadLink.style.display = 'flex';
    });
});

function rleEncode(input) {
    let output = '';
    let count = 1;
    for(let i = 0; i < input.length; i++) {
        if(input[i] == input[i +1]){
            count++;

        }else{
            output += count + input[i];
            count = 1;
        }
    }
    return output;
}