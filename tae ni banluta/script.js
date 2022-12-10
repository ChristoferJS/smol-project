function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

window.addEventListener('load', async function() {
    await sleep(3000);
    document.getElementById('loading-screen').style.display = 'none';
  });