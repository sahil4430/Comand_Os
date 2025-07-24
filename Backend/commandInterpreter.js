function extractquery(input) {
  // dummy logic — replace with your real implementation
  return input.toLowerCase().replace("create meet at", "").trim();
}

export function Interpretcommand(input) {
    const lowerInput = input.toLowerCase();
    if(lowerInput.includes('find')|| lowerInput.includes('search')||lowerInput.includes('where')){
        return {action :'search' ,query :extractquery(input)
        
        }
    }
      return {action :'unknown'}  
}
// module.exports ={Interpretcommand};
export default Interpretcommand;