import React, { Component } from 'react';

class Capitals extends Component {
  constructor(){
    super();

    this.state = {
      states: [
        {
        "code": "AN",
        "name": "Andaman and Nicobar Islands",
        "capital": "Port Blair"
        },
        {
        "code": "AP",
        "name": "Andhra Pradesh",
        "capital": "Amaravathi"
        },
        {
        "code": "AR",
        "name": "Arunachal Pradesh",
        "capital": "Itanagar"
        },
        {
        "code": "AS",
        "name": "Assam",
        "capital": "Dispur"
        },
        {
        "code": "BR",
        "name": "Bihar",
        "capital": "Patna"
        },
        {
        "code": "CG",
        "name": "Chandigarh",
        "capital": "Chandigarh"
        },
        {
        "code": "CH",
        "name": "Chhattisgarh",
        "capital": "Raipur"
        },
        {
        "code": "DH",
        "name": "Dadra and Nagar Haveli",
        "capital": "Silvassa"
        },
        {
        "code": "DD",
        "name": "Daman and Diu",
        "capital": "Daman"
        },
        {
        "code": "DL",
        "name": "Delhi",
        "capital": "Delhi"
        },
        {
        "code": "GA",
        "name": "Goa",
        "capital": "Panaji"
        },
        {
        "code": "GJ",
        "name": "Gujarat",
        "capital": "Gandhinagar"
        },
        {
        "code": "HR",
        "name": "Haryana",
        "capital": "Chandigarh"
        },
        {
        "code": "HP",
        "name": "Himachal Pradesh",
        "capital": "Shimla"
        },
        {
        "code": "JK",
        "name": "Jammu and Kashmir",
        "capital": "Srinagar (summer), Jammu (winter)"
        },
        {
        "code": "JH",
        "name": "Jharkhand",
        "capital": "Ranchi"
        },
        {
        "code": "KA",
        "name": "Karnataka",
        "capital": "Bengaluru"
        },
        {
        "code": "KL",
        "name": "Kerala",
        "capital": "Thiruvananthapuram"
        },
        {
        "code": "LD",
        "name": "Lakshadweep",
        "capital": "Kavaratti"
        },
        {
        "code": "MP",
        "name": "Madhya Pradesh",
        "capital": "Bhopal"
        },
        {
        "code": "MH",
        "name": "Maharashtra",
        "capital": "Mumbai"
        },
        {
        "code": "MN",
        "name": "Manipur",
        "capital": "Imphal"
        },
        {
        "code": "ML",
        "name": "Meghalaya",
        "capital": "Shillong"
        },
        {
        "code": "MZ",
        "name": "Mizoram",
        "capital": "Aizawl"
        },
        {
        "code": "NL",
        "name": "Nagaland",
        "capital": "Kohima"
        },
        {
        "code": "OR",
        "name": "Odisha",
        "capital": "Bhubaneswar"
        },
        {
        "code": "PY",
        "name": "Puducherry",
        "capital": "Pondicherry"
        },
        {
        "code": "PB",
        "name": "Punjab",
        "capital": "Chandigarh"
        },
        {
        "code": "RJ",
        "name": "Rajasthan",
        "capital": "Jaipur"
        },
        {
        "code": "SK",
        "name": "Sikkim",
        "capital": "Gangtok"
        },
        {
        "code": "TN",
        "name": "Tamil Nadu",
        "capital": "Chennai"
        },
        {
        "code": "TS",
        "name": "Telangana",
        "capital": "Hyderabad"
        },
        {
        "code": "TR",
        "name": "Tripura",
        "capital": "Agartala"
        },
        {
        "code": "UP",
        "name": "Uttar Pradesh",
        "capital": "Lucknow"
        },
        {
        "code": "UK",
        "name": "Uttarakhand",
        "capital": "Dehradun"
        },
        {
        "code": "WB",
        "name": "West Bengal",
        "capital": "Kolkata"
        }
      ]
    };
  }

  render() {
    return (
      <div className="offset-md-5">
        {this.state.states.map(capital => {
          if(capital.name === this.props.selectedOption) {
            return (<div>
              <br />
              <p style={{color: '#2a89d1'}}><strong>State Code</strong>: &nbsp;{capital.code}</p>
              <br />
              <p style={{color: '#2a89d1'}}><strong>State Capital</strong>: &nbsp;{capital.capital}</p>
            </div>
            )
          }
        })}
      </div>
    );
  }
}

export default Capitals;