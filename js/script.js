// This will log a message when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js is properly linked!');

    var btn = document.getElementById('read-more-btn');
    var moreInfo = document.getElementById('more-info');

    btn.addEventListener('click', function() {
        console.log('Read More button clicked!');

        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            btn.textContent = 'Read Less';
        } else {
            moreInfo.style.display = 'none';
            btn.textContent = 'Read More';
        }
    });
});

