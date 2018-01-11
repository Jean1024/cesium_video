viewer = new Cesium.Viewer('cesiumContainer', {
    // clockViewModel : new Cesium.ClockViewModel(clock),
    animation: false,//是否创建动画小器件，左下角仪表
    baseLayerPicker: false,//是否显示图层选择器
    fullscreenButton: false,//是否显示全屏按钮
    geocoder: false,//是否显示geocoder小器件，右上角查询按钮
    homeButton: false,//是否显示Home按钮
    infoBox: false,//是否显示信息框
    sceneModePicker: false,//是否显示3D/2D选择器
    selectionIndicator: false,//是否显示选取指示器组件
    timeline: false,//是否显示时间轴
    navigationHelpButton: false,//是否显示右上角的帮助按钮
    scene3DOnly: true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
    imageryProvider: new Cesium.SingleTileImageryProvider({
        url : './images/bg.png',
        rectangle : Cesium.Rectangle.fromDegrees(-180.0, -90, 180, 90)
    }),
    // imageryProvider:new Cesium.UrlTemplateImageryProvider({
    //     url: 'http://61.4.184.177:10003/site_china/{z}/{x}/{y}',
    //     minimumLevel:0,
    //     maximumLevel: 10
    // }),
});


// plan1
var videoElement = document.getElementById('trailer');
// var sphere = viewer.entities.add({
//     position : Cesium.Cartesian3.fromDegrees(-79, 39, 90000),
//     ellipsoid : {
//         radii : new Cesium.Cartesian3(90000, 90000, 90000),
//         material : videoElement
//     }
// });
// viewer.trackedEntity = sphere;

var Polygon = viewer.entities.add({
    rectangle : {
        coordinates : Cesium.Rectangle.fromDegrees(-180.0, -90.0, 179.99, 89.9),
        height : 50000,
        material : videoElement
    }
});

viewer.entities.remove(Polygon)
var tt = false;
document.querySelector('#videoAdd').addEventListener('click',function(){
    if(tt){
        viewer.entities.remove(Polygon)
        tt =false
    }else{
        viewer.entities.add(Polygon)
        tt = true
    }
})
