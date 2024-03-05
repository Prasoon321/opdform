import { useState } from "react";
function Opdform() {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [refBy, setRefBy] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // For demonstration, simply display an alert
    alert("Patient added!");
  };
  const toggleForm = () => {
    setFormVisibility(!isFormVisible);
  };
  return (
    <>
      <div>
        <h3>Click On Opd To create opd </h3>
        <div className="w3-bar w3-black">
          <a href="#" className="w3-bar-item w3-button w3-mobile">
            Home
          </a>
          <a
            href="#"
            className="w3-bar-item w3-button w3-mobile"
            onClick={toggleForm}
          >
            OPD
          </a>
          <a href="#" className="w3-bar-item w3-button w3-mobile">
            USER
          </a>
          <a href="#" className="w3-bar-item w3-button w3-mobile">
            HISTORY
          </a>
        </div>
      </div>
      {isFormVisible && (
        <div>
          <div className="">
            <section className="rounded-md p-2 bg-white">
              <div className="flex items-center justify-center my-3">
                <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                  <div className="mb-2"></div>
                  <h2 className="text-2xl font-bold leading-tight">
                    This is an OPD form
                  </h2>

                  <form className="mt-5">
                    <div className="space-y-4">
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Patient Name
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="Full Name"
                            type="text"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="patient_name"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Mobile */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Mobile
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="Mobile"
                            type="text"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Address
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="Address"
                            type="text"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Refrence By */}
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Refrence By
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="Refrence By"
                            type="text"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="ref_by"
                            value={refBy}
                            onChange={(e) => setRefBy(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Address
                        </label>
                        <div className="mt-2">
                          <input
                            placeholder="Email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            name="email"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mt-3">
                          <label className="text-base font-medium text-gray-900">
                            Adhar Picture
                          </label>
                        </div>
                        <div className="mt-2 mb-3">
                          <input
                            className="file-input w-full max-w-xs"
                            type="file"
                            name="avatar"
                          />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <label className="text-base font-medium text-gray-900">
                            Pateint Picture
                          </label>
                        </div>
                        <div className="mt-2 mb-3">
                          <input
                            className="file-input w-full max-w-xs"
                            type="file"
                            name="avatar"
                          />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <label className="text-base font-medium text-gray-900">
                            Panel Picture
                          </label>
                        </div>
                        <div className="mt-2 mb-3">
                          <input
                            className="file-input w-full max-w-xs"
                            type="file"
                            name="avatar"
                          />
                        </div>
                        <button
                          className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Submit Patient
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Opdform;
