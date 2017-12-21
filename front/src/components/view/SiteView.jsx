import React from 'react';
import Screen1 from './sections/screen1'
import Screen2 from './sections/screen2'
import Screen3_links from './sections/screen3_links'
import Screen3_pics from './sections/screen3_pics'


const SiteView = ({pageData}) => {
  const {/* color1,color2, */description,email,facebook,twitter,linkedIn,instagram,name,occupation,profile_pic,profile_type,picture1,picture2,picture3} = pageData
  const sm={facebook,instagram,twitter,linkedIn}
  const pictures = [picture1,picture2,picture3]
  console.log(pageData)
  return (
    <main className="container">
      <Screen1 name={name} occupation={occupation} email={email} sm={sm}/>
      <Screen2 image={profile_pic} description={description} />
      {(profile_type==="pictures")?<Screen3_pics pictures={pictures} />:<Screen3_links />}
    </main>
  )
}
/* name, :pw, :profile_type, :profile_picture,:facebook, :instagram, :email, :color1, :color2)
  end */


/* part3:
{profile_type?<Screen3_links />:<Screen3_pics />}
*/
export default SiteView;
