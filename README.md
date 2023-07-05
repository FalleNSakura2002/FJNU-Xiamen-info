# 学生作业-厦门市信息综合平台

## 项目使用框架

- Leaflet

- MapVGL

## 项目使用数据

- [厦门市区级行政矢量边界](http://47.115.200.155:8080/geoserver/FJNU_GIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=FJNU_GIS%3AXiamen_boundary&maxFeatures=5000&outputFormat=application%2Fjson)

- [厦门市土地利用数据](http://47.115.200.155:8080/geoserver/FJNU_GIS/wms?service=WMS&version=1.1.0&request=GetMap&layers=FJNU_GIS%3AXiamen_LULC&bbox=117.88063049360346%2C24.423578262527652%2C118.40937886983622%2C24.910824472634083&width=768&height=707&srs=EPSG%3A4326&styles=&format=image%2Fpng)

- [厦门市降水测站数据](http://47.115.200.155:8082/static/rainstation.json)

## 项目截图

可以通过访问[DEMO](http://47.115.200.155:8082/)进行操作体验

### 底图切换

- 矢量底图

![alt](thumb\main.png)

- 卫星底图

![img_base.png](thumb\img_base.png)

### 要素图层

- 土地利用

![LULC.png](thumb\LULC.png)

- 降水测站分布

![RST.png](thumb\RST.png)

- 降水测站分布密度

![RSH.png](thumb\RSH.png)

### 三维图层

- 人口分布密度

![Pop.png](thumb\Pop.png)


