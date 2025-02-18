document.addEventListener("DOMContentLoaded",()=>{
    const entryForm =document.querySelector(".entry-form");
    const firstNameInput =document.querySelector("#first-name");
    const lastNameInput =document.querySelector("#last-name");
    const studentClassInput =document.querySelector("#class");
    const rollNoInput =document.querySelector("#roll-no");
    const genderInput =document.querySelector("#gender");
    const dobInput =document.querySelector("#dob");
    const fatherNameInput =document.querySelector("#father-name");
    const motherNameInput =document.querySelector("#mother-name");
    const phoneNoInput =document.querySelector("#phone-no");
    const emailInput =document.querySelector("#gmail");


    entryForm.addEventListener("submit",sendData);
    
    async function sendData(event){
        console.log('hello')/
        event.preventDefault();

            const firstNameData=firstNameInput.value.trim();
            const lastNameData=lastNameInput.value.trim();
            const studentClassData=studentClassInput.value.trim();
            const rollNoData=rollNoInput.value.trim();
            const genderData=genderInput.value.trim();
            const dobData=dobInput.value.trim();
            const fatherNameData=fatherNameInput.value.trim();
            const motherNameData=motherNameInput.value.trim();
            const phoneNoData=phoneNoInput.value.trim();
            const emailData=emailInput.value.trim();

        try {
            await fetch("http://localhost:3000/api/addData", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName:firstNameData,
            lastName:lastNameData,
            studentClass:studentClassData,
            rollNo:rollNoData,
            gender:genderData,
            dob:dobData,
            fatherName:fatherNameData,
            motherName:motherNameData,
            phoneNo:phoneNoData,
            email:emailData,
            }),
        });
        firstNameInput.value="";
        lastNameInput.value="";
        studentClassInput.value="";
        rollNoInput.value="";
        genderInput.value="";
        dobInput.value="";
        fatherNameInput.value="";
        motherNameInput.value="";
        phoneNoInput.value="";
        emailInput.value="";
        } catch (error) {
        console.log( error);
        }
    }
})