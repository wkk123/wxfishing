export const timeSplit = (str)=> {
   let obj = {}
   let arr = str.split(":")
   obj['minute'] = parseInt(arr[0].substr(1))
   obj['second'] = arr[1].indexOf('0')===0?parseInt(arr[1].substr(1)):parseInt(arr[1])
   return obj
}

export const trim = str => {
    let newstr = str+''
    return newstr.replace(/\s/g,"")
}
