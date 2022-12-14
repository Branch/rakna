export interface IBaseTemplate {
    sampleProp: string
}

const BaseTemplate = ({ sampleProp }: IBaseTemplate) => {
    return <div>{sampleProp}</div>
}

export default BaseTemplate
