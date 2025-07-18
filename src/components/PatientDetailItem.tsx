type PatientDetailItemProps ={
    label:string
    data: string
}

export default function PatientDetailItem({label, data}: PatientDetailItemProps) {
  return (
    <div>
       <p className="font-bold mb-3 uppercase text-gray-700">{label}: {''}
        <span className="font-normal normal-case">
          {data}
        </span>
      </p>
    </div>
  )
}
