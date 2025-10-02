import imgFeatureManager from '/illustration-features-tab-1.svg'
import imgManagerStyles from '../imgManager/_imgManager.module.scss'
import ImgManager from '../imgManager/imgManager'

function Manager() {
  return (
    <>
      <section>
        <div>

        </div>
        <div>
            <ImgManager src={imgFeatureManager} style={imgManagerStyles['img-monitor']} alt="BookMarks Manager" />
        </div>
      </section>
    </>
  )
}
export default Manager