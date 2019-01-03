function infoSelect() 
    {
       var objPilihan = document.getElementById("desa");
       var objInfo = document.getElementById("desa1");
      
       var str = "Daftar Desa : \n";

       for (var i = 0;
            i < objPilihan.options.length;
            i++)
           if (objPilihan.options[i].selected)
             str = str + 
                objPilihan.options[i].value + "\n";

       objInfo.value = str;
       console.trace();
    }