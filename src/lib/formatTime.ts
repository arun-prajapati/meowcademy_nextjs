export default function formatTime(startTime:string,endTime:String){
    if(startTime ==='00:00:00' && endTime ==='00:00:00'){
        return("closed")

    }
    const format=(timeString:String)=>{
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    }
   
    return format(startTime) + "-" + format(endTime);
}