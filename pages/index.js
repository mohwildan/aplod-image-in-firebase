import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { storage } from "../Firebase";

export default function Home() {
  const [imagesUplod, setImagesUplod] = useState(null)
  const [data, setData] = useState([])
    
    const uplodImage = () => {
        if(imagesUplod === null) return;
        const imageRef = ref( storage,`images/${imagesUplod.name}`)
        const uplod =  uploadBytesResumable(imageRef, imagesUplod)

         uplod.on("state_changed", (snapshot) => {
           const propgres = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(propgres);
           switch (snapshot.state) {
             case "paused":
               console.log("uplod is pouse");
               break;
            case "running" :
              console.log("aplod is running");
              break
             default:
               break;
           }
         }, (error) => {
           console.log(error);
         }, () => {
           getDownloadURL(uplod.snapshot.ref).then((downlod) => {
            setData((prev) => ({
              ...prev, img: downlod
            }))
           })
         }


         )

        
        
    }

    console.log(data);

  return (
    <div>
      <Input type="file" onChange={(e) => {setImagesUplod(e.target.files[0])}}/>
      <Button onClick={uplodImage}>Uplod Images</Button>
    </div>
  )
}
