import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Title } from '../components'

/*
page will work as landing page
should include:
- call to action
- Product tagline
- Logos of your biggest clients
- Testimonials
- Product features
- Short instructive videos to promote features
*/

const Home: NextPage = () => {
  return (
    <>
      <Title>LETA - Type faster than ever</Title>

      <div className=''>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper, turpis sit amet vehicula ullamcorper, justo arcu volutpat ipsum, a sollicitudin quam enim vel velit. Etiam facilisis nec massa ut consectetur. Aliquam laoreet erat ac orci dapibus, sed cursus velit suscipit. Nam et cursus nulla. Fusce interdum aliquam justo, sit amet congue lacus viverra sit amet. Nulla facilisi. Donec efficitur elementum mauris, ac maximus metus volutpat eleifend. Integer vitae neque massa. Vestibulum sollicitudin aliquet ornare. Suspendisse est nisi, fermentum vitae nibh sed, faucibus efficitur eros. Aliquam aliquam facilisis faucibus. Maecenas commodo euismod massa eu elementum. Curabitur a pharetra tellus, a pretium est. Proin lacinia dictum dictum.

        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non nulla hendrerit, finibus nunc sed, dignissim odio. Aliquam aliquet, felis pretium molestie suscipit, purus risus maximus ipsum, at molestie turpis odio quis leo. Sed sit amet nulla non enim fermentum ornare eget mattis ante. Nulla semper erat at tempor porta. Suspendisse risus lectus, gravida et mi in, pretium malesuada massa. Sed vestibulum, diam fringilla dapibus facilisis, odio nisi ornare nulla, id viverra nisl mauris ac leo. Donec eget arcu semper, tincidunt enim vitae, accumsan lorem. Nulla suscipit, lorem nec tincidunt pretium, metus leo pulvinar massa, nec tincidunt ex ante a nibh. Suspendisse potenti.

        Nullam a interdum tortor, et convallis nulla. Pellentesque nec nibh sollicitudin, fermentum purus pellentesque, bibendum leo. Praesent hendrerit, nibh et faucibus congue, enim enim tincidunt neque, a rhoncus leo risus vel est. In malesuada erat a sodales accumsan. Praesent egestas commodo nunc, in volutpat tellus maximus vitae. Maecenas luctus quis ligula eu malesuada. Quisque et dictum lacus. Integer non suscipit tellus, sed tristique ligula. Etiam consectetur efficitur felis id molestie. Curabitur vestibulum eros ut pellentesque maximus. Cras elementum vehicula blandit. Sed facilisis quam in ullamcorper dapibus. Ut a lobortis purus. Sed rutrum risus dolor, vel blandit nibh tempor vel.

        Morbi facilisis nunc ac gravida aliquam. In bibendum quis eros in pellentesque. Suspendisse orci nulla, egestas eget mauris nec, bibendum dictum purus. Praesent in tortor a tellus finibus commodo. In nec ante arcu. Praesent maximus diam sed orci tempor accumsan. Curabitur euismod velit metus, in luctus arcu porta eu. Curabitur imperdiet dolor eget nulla finibus, nec tempor purus lacinia. Curabitur non luctus mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eleifend quam sapien, vel malesuada orci convallis eleifend. Suspendisse ut gravida lacus, vitae rutrum lorem. Nam elementum mauris vitae iaculis blandit. Praesent arcu ante, malesuada eget massa non, elementum pulvinar erat. Ut sed pulvinar sapien, ac consectetur leo.

        Morbi eget venenatis felis. Suspendisse potenti. Phasellus vestibulum justo at nunc sollicitudin, et molestie augue euismod. Nulla ornare convallis est eget blandit. Ut vel ex quam. Sed consequat lectus a tempor elementum. Suspendisse lobortis interdum pellentesque. In maximus odio ac elit tempus feugiat. Vestibulum dapibus eu odio ut aliquet. Sed vitae semper magna. Nullam consectetur vehicula leo, sed pellentesque diam imperdiet a. Vivamus bibendum, tortor ut fermentum fringilla, ligula metus suscipit nunc, a convallis magna massa eu sapien. Aenean rutrum faucibus ante id lacinia. Phasellus egestas ipsum ex, ut cursus libero imperdiet vel. Etiam sit amet libero tellus. Vivamus vel viverra nisl.

        Sed eu tortor non augue fringilla tempor. Suspendisse vitae consequat augue, in venenatis massa. Aliquam id laoreet nibh. Sed sollicitudin sem ante, id varius felis facilisis non. Integer semper arcu quis rhoncus efficitur. Nulla facilisi. Phasellus ut nulla non dui fermentum auctor. Proin tempus ante mauris, at semper orci scelerisque sed. Quisque eu arcu fermentum felis hendrerit porta eu ut neque. Proin sapien arcu, pulvinar sit amet urna pellentesque, lacinia fermentum magna. Maecenas convallis sagittis magna, eu ornare nunc dictum a.

        In vel nibh lectus. Ut laoreet ac ex quis interdum. Vestibulum mollis eu tortor ac hendrerit. Ut vulputate leo sit amet varius consequat. Nulla volutpat iaculis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tincidunt justo venenatis eleifend. Nulla elementum aliquet justo non venenatis. Nam tristique elementum augue, nec auctor erat lacinia a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ac pellentesque lorem, non maximus ligula. Vivamus euismod massa ut pretium cursus. Sed vel eros velit. Phasellus vulputate ullamcorper metus vulputate volutpat. Donec iaculis felis tempor facilisis malesuada. Praesent metus elit, porta eget euismod et, maximus ac velit.

        Aliquam consequat nisi pellentesque egestas maximus. Quisque ullamcorper turpis in mauris vestibulum eleifend. Donec nunc odio, laoreet sed orci quis, pulvinar tempor felis. Vivamus quis ex ipsum. Morbi lacinia magna volutpat tellus egestas gravida. Aliquam non dictum metus. Integer vel condimentum nunc, eget semper dolor. Duis lectus velit, eleifend vitae nibh at, consequat consequat libero. Sed id malesuada ipsum, sed finibus dui. Integer maximus lorem et mauris cursus aliquet.

        Aliquam nec vulputate nunc. Etiam id volutpat eros. Ut luctus massa quis accumsan sollicitudin. Praesent a luctus quam. Aenean eu tincidunt mauris. Sed enim odio, posuere et placerat at, convallis sit amet purus. Vestibulum tellus nunc, egestas ac tellus vitae, placerat suscipit ante. Nam non lorem neque. Pellentesque ipsum libero, efficitur eget justo vitae, suscipit egestas sem. Fusce congue nunc dui, vel semper urna tempor eget. Integer quis dignissim nisi, non dictum massa. Donec facilisis metus nibh, in mattis mauris lobortis dignissim. Vivamus faucibus libero mauris, vitae dictum metus efficitur nec. Nulla fermentum non mi non semper. Duis tristique sit amet velit ut vestibulum. Vivamus pulvinar ultrices tortor, eu blandit metus accumsan a.

        Donec neque dolor, tempus vitae orci ac, ultricies tristique magna. Vivamus tristique velit et odio euismod porttitor. Morbi ultricies luctus est quis elementum. In consectetur consectetur felis vitae dictum. Maecenas vitae metus pellentesque, scelerisque est rhoncus, iaculis tortor. Fusce venenatis massa quis ex pellentesque tristique. Nullam tempor tortor a arcu venenatis pharetra. Nunc sit amet consectetur ligula, sed venenatis enim. Phasellus volutpat, est non consequat consectetur, lorem lacus accumsan neque, facilisis aliquet lacus nulla vel purus. Ut quis orci nec quam molestie molestie ut et lacus. Integer in volutpat ex. Integer ut mauris at mi lobortis lacinia quis ut metus. Maecenas enim nulla, consequat eget pellentesque nec, scelerisque a ipsum. Ut sit amet vehicula risus.
      </div>

    </>
  )
}

export default Home
