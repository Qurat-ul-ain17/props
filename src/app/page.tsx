
import React from "react";
import StudentCard from "./cards/page";

export default function ParentComponent() {
  return (
    <div >
    <StudentCard name='Ainy' rollNumber={1234}/>
    <br/>
    <StudentCard name='Saima' rollNumber={4567}/>
    <br/>
    <StudentCard name='Fatima' rollNumber={7890}/>
    </div>
  );
}
