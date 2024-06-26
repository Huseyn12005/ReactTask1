const Profile = ({fullname,phone,email,city,experience,skills,img}) => {
    return (
      <>
        <img id="img" src={img} alt="" />
        <div id="TitleDiv">
          <p>Full Name:</p>
          <p>{fullname}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Phone:</p>
          <p>{phone}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Email:</p>
          <p>{email}</p>
        </div>
  
        <div id="TitleDiv">
          <p>City:</p>
          <p>{city}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Experience:</p>
          <p>{experience}</p>
        </div>
  
        <div id="TitleDiv">
          <p>Skills:</p>
          <p>{skills}</p>
        </div>
      </>
    );
  };
  
  
  export default Profile;