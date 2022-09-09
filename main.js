function start_classification () {
    navigator.mediaDevices.getUserMedia();
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W3EKgkRrE/model.json',modelReady)
}

function modelReady () {
    classifier.classify(gotResults);
}

function gotResults (error, results) {
    console.log('Got Results')
}