(function () {
  window.BMapGL_loadScriptTime = new Date().getTime();
  document.write(
    '<script type="text/javascript" src="http://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=VwHgMoWwSycEGN1puSGAsfH2a0a726ot&services=&t=20230613170744"></script>'
  );
  document.write(
    '<link rel="stylesheet" type="text/css" href="http://api.map.baidu.com/res/webgl/10/bmap.css"/>'
  );
})();
