import React, {useState} from 'react';
import './Styles/BadgeForm.css';
import imageImg from '../images/icon-gallery-free-22.jpg';
import MiniLoader from '../components/MiniLoader';

function BadgeForm (props) {
  const [image, setImage] = useState ('');
  const [loading, setLoading] = useState (false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData ();
    data.append ('file', files[0]);
    data.append ('upload_preset', 'matias');
    setLoading (true);
    const res = await fetch (
      '	https://api.cloudinary.com/v1_1/matiaskaufman/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json ();

    setImage (file.secure_url);
    setLoading (false);
  };

  return (
    <div className="myDivHero">

      <form onSubmit={props.onSubmit}>
        <div className="form-group div-Container">
          <label htmlFor="">First Name</label>
          <input
            onChange={props.onChange}
            className="form-control myForm"
            type="text"
            name="firstName"
            value={props.formValues.firstName}
          />
          <label htmlFor="">Last Name</label>
          <input
            onChange={props.onChange}
            className="form-control myForm"
            type="text"
            name="lastName"
            value={props.formValues.lastName}
          />
          <label htmlFor="">Email</label>
          <input
            onChange={props.onChange}
            className="form-control myForm"
            type="text"
            name="email"
            value={props.formValues.email}
          />
          <label htmlFor="">Job Tittle</label>
          <input
            onChange={props.onChange}
            className="form-control myForm"
            type="text"
            name="jobTitle"
            value={props.formValues.jobTitle}
          />
          <label htmlFor="">Twitter</label>
          <input
            onChange={props.onChange}
            className="form-control myForm"
            type="text"
            name="twitter"
            value={props.formValues.twitter}
          />

          <label className="button-upload">
            <img className="button-upload_img" src={imageImg} alt="imgIcon" />
            <p>Uppload profile picture</p>
            <input
              className="input"
              type="file"
              onChange={uploadImage}
              accept="image/*"
            />
          </label>

          {loading
            ? <MiniLoader />
            : <img src={image} style={{width: '300px'}} />}

          <p className="p-accept">
            <input type="checkbox" className="button-check" value="accept" />
            I accept the
            <span className="color-font"> terms of service </span>
            and the
            <span className="color-font"> privacy policy</span>
          </p>
          <div>
            <button
              onClick={props.buttonClick}
              className="btn btn-primary myButton"
            >
              <p>Save</p>
            </button>

            {props.error &&
              <p className="text-danger">{props.error.message}</p>}
          </div>
        </div>

      </form>
    </div>
  );
}
export default BadgeForm;
