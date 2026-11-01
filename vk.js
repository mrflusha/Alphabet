vkBridge.send("VKWebAppInit", {});


vkBridge.send('VKWebAppShowBannerAd', {
  banner_location: 'top'
  })
 .then((data) => { 
    if (data.result) {
      // Баннерная реклама отобразилась
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });