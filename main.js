//  boject () ==> {}  --->  {}


let cit = {
    insituteName : "createve IT institute",
    totalStudent :"3 Lakh",
    location : "Dhanmondi 4 5",
    branch : 4,
    subjectList : ['web & software' , "Digital  Marketing" , "Ghrapics" , " 3d Animation" , "cyber secrutry"],
    

    webandSoftware :{
        tatoalFaculty :28,
        
        Hod: "Shohan Hossain Ean",
        mentorName : ["Tahsan" , "Wasim", "Rajib" , "Shoel" , "Nayan"],
        whoTakeFdr : function () {

            let fdrFaculty = [];
            
            for (let name of this.mentorName) {

                if(name == "Rajib" || name == "Nayan"){
                    fdrFaculty.push(name)
                }
            }

            console.log(fdrFaculty); 
        }

    
    },

     digitalMaretting :{
        hod: "Shovo",
        hodExperience : 8,
        totalMember :35,
        mentorName : ["Naim" , "Shariar" , "Tanjim" , {
            funnyTeacherName : "Naim",
            tatoalExperience : "7 Years",
            homeDistrict : "Feni",
            aboutshariar:{
                fullName : "Shariar Nazim",
                maritualStatus: "Married",
                sayAbout : function (){
                    return `${this.fullName} and ${this.maritualStatus}`
                }
                
                    
            }
            
        },],

        aboutDMHOd : function(){

            console.log(`HOD Name is :  ${this.hod} Experience : ${this.hodExperience}`);
            
            
        }
    }


}


console.log(cit.digitalMaretting.mentorName[3]);
