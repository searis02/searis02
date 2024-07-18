var ref = document.referrer;

if (ref.match(/index/) != null) {
    // index.htmlから来た場合
} else {
    // index.html以外から来た場合
    location.href = "./personal site.html";
}