import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctor } from '../redux/doctors/doctorsSlice';
import './componentsCss/details.css';

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const { doctorId } = useParams();

  useEffect(() => {
    dispatch(getDoctor(doctorId));
  }, [dispatch, doctorId]);

  const doctor = useSelector((state) => state.doctors.doctor);

  return (
    <section className="container">
      <div className="dimg-desktop">
        <img src={doctor.photo} alt={doctor.name} crossOrigin="anonymous | use-credentias" />
      </div>
      <div className="dinfo">
        <div className="dwrap">
          <h1>{doctor.name}</h1>
        </div>
        <div className="dimg-mobile">
          <img src={doctor.photo} alt={doctor.name} crossOrigin="anonymous | use-credentias" />
        </div>
        <ul>
          <li>
            Price per Hour: $
            {doctor.price}
          </li>
          <li>
            About:

            {doctor.about}
          </li>
          <li>
            City:

            {doctor.city}
          </li>
          <li>
            Speciality:

            {doctor.speciality}
          </li>
        </ul>
        <button type="button" className="rbtn">
          <Link to="/reserve" className="rebtn">Reserve</Link>
        </button>
      </div>
    </section>
  );
};

export default DoctorDetails;
