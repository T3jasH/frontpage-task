/**
 * 
 * @param mins Number of mins to add
 * @returns Current date srting with mins added to it
 */
export const addTime = (mins: number) => {
    return new Date(new Date().getTime() - (100 * 1000 * 60) + (mins * 1000 * 60)).toString()
}