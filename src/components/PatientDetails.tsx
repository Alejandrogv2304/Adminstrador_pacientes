import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientDetailsProps ={
    patient : Patient
}
export default function PatientDetails({patient}: PatientDetailsProps) {
  
  const deletePatient = usePatientStore((state)=> state.deletePatient)
  const getPatientById = usePatientStore((state)=> state.getPatientById)

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="id" data={patient.id}/>
      <PatientDetailItem label="Nombre" data={patient.name}/>
      <PatientDetailItem label="Propietario" data={patient.caretaker}/>
      <PatientDetailItem label="Email" data={patient.email}/>
      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()}/>
      <PatientDetailItem label="Síntomas" data={patient.symptoms}/>

      <div className="flex flex-col md:flex-row justify-between  mt-10">
         <button 
         type="button"
         className="px-10 py-2 rounded-lg uppercase bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
         onClick={() => getPatientById(patient.id)}
         >
          Editar
         </button>
         <button 
         type="button"
         className="py-2 px-10 rounded-lg uppercase bg-red-600 hover:bg-red-700 text-white font-bold"
         onClick={()=>deletePatient(patient.id)}
         >
          Eliminar
         </button>
      </div>
    </div>
  )
}
