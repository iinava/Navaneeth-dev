function Splitstring(inputstring: string): string[]
{
    const characters :string[] = []
    const regex = /[\s\S]/gu;
    let match ;
    while ((match = regex.exec(inputstring)) !==null) {
        characters.push(match[0])
    }
    return characters
}

export default Splitstring
