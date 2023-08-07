import "./styles.css"

export default function Cars(){
    const listOfCars =['Ford','BMW','Audi']
 

  return(
    <>
        <div className="form=row">
          <label htmlFor="name">Who lives in my garage: 
          <ul>
            {
                listOfCars.map(listOfCars =>{
                    return <li key={listOfCars.id}>I am a {listOfCars}</li>
                })}
          </ul>
          </label>
        </div>
       
    </>
   
  );
}
  