//Owner: Lakshmi Sirisha C
//This BMICalculator takes JSon file as Input and calculates the BMI of each person 
//and displays the BMI and health risk of each person
//This BMI calculator also gives the total number of people who are over weight

//Take the Input BMI filenmame
const prompt=require('prompt-sync')({signint:true});
const jsonfilename=prompt("enter bmi filename::");

if (jsonfilename.length>0){
    //Reading the json file
    const fs=require("fs");
    var overweightcounter=0;
    fs.readFile(jsonfilename,"utf8",(err,jsonString)=>{
        if(err){
            console.log("Pls enter BMIData of file json like BMIData.json");
        }
        
    
    var  BMIData=JSON.parse(jsonString);
  
    BMIData.forEach(element => {
        var htm=element.HeightCm/100;
  
        var bmi=Math.round(element.WeightKg/Math.pow(htm,2)); 
  
        var obesecat;
        var riskcat;
    
        if (bmi<=18.4){
            obesecat="Under Weight";
            riskcat="Malnutrition Risk";
        }
        else if(bmi>=18.5 && bmi<=24.9){
            obesecat="Normal Weight\t";
            riskcat="Low Risk";
        }
        else if(bmi>=25 && bmi<=29.9){
            obesecat="Over Weight\t";
            riskcat="Enhanced Risk";
            overweightcounter=overweightcounter+1;
        }
        else if(bmi>=30 && bmi<=34.9){
            obesecat="Moderately Obese";
            riskcat="Medium Risk";
            overweightcounter=overweightcounter+1;
        }
        else if(bmi>=35 && bmi<=39.9){
            obesecat="Severly Obsese\t";
            riskcat="High Risk";
            overweightcounter=overweightcounter+1;
        }
        else if(bmi>=40){
            obesecat="Very Severe Obese";
            riskcat="Very High Risk";
            overweightcounter=overweightcounter+1;
        }

        console.log("\n\n"+element.Person+"\t"+bmi+"\t"+obesecat+"\t"+riskcat);
    
    });
    if(overweightcounter>0){
        console.log("\n\nNo of Overweight People:"+overweightcounter);
    }
    });
}

