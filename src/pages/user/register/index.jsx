import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { userServices } from "../../../services";
import axios from "axios";

function Register() {
  const cloudApi = import.meta.env.VITE_CLOUD_API;
  const cloudName = import.meta.env.VITE_CLOUD_NAME;
  const cloudPReset = import.meta.env.VITE_CLOUD_PRESET;

  const [userFormData, setUserFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
    avatar: "",
  });

  const [file, setFile] = useState("");
  const [registerStatus, setStatus] = useState(false);

  const avatarFile = useRef(null)

  const signUpUser = (e) => {
    e.preventDefault();

    if (userFormData.password === userFormData.rePassword) {
      setStatus(true);
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", cloudPReset);

      axios.post(`${cloudApi}/${cloudName}/upload`, formData).then((res) => {
        userServices
          .createUser({ ...userFormData, avatar: res.data.url })
          .then((res) => {
            setStatus(false);
            setUserFormData({
              fullname: "",
              username: "",
              email: "",
              password: "",
              rePassword: "",
              avatar: "",
            });
            avatarFile.current.value = ""
          });
      });
    } else {
      alert("Ay Zalim passwordu duz yaz!");
    }
  };
  return (
    <section id="user-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xl-6 col-md-8 col-sm-10 col-12">
            <form onSubmit={signUpUser}>
              <fieldset>
                <legend>Register Page</legend>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userFormData.fullname}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      fullname: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Your UserName"
                  value={userFormData.username}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      username: e.target.value,
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={userFormData.email}
                  onChange={(e) =>
                    setUserFormData({ ...userFormData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={userFormData.password}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      password: e.target.value,
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="Re-Type password"
                  value={userFormData.rePassword}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      rePassword: e.target.value,
                    })
                  }
                />
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                 ref={avatarFile}
                />
                <input
                  type="submit"
                  value={"Register"}
                  disabled={registerStatus}
                />
                <span>
                  <Link to="/login">login page</Link>
                </span>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
