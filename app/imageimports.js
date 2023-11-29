import cloudy from '/public/media/cloudy-removebg-cropped.png'
import haze from 'public/media/haze-removebg-cropped.png'
import rainy from '/public/media/rainy-removebg-cropped.png'
import snow from '/public/media/snow-removebg-cropped.png'
import sunny from '/public/media/sunny-removebg-cropped.png'
import thunder from '/public/media/thunder-removebg-cropped.png'
import typhoon from '/public/media/typhoon-removebg-cropped.png'
import windy from '/public/media/windy-removebg-cropped.png'
class WeatherIcons {
    constructor(){
        this.cloudyicon = cloudy;
        this.hazeicon = haze;
        this.rainyicon = rainy;
        this.snowicon = snow;
        this.sunnyicon = sunny;
        this.thundericon = thunder;
        this.typhoonicon = typhoon;
        this.windyicon = windy;
    }
}
export default WeatherIcons;