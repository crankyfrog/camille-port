import canonicalImage from '../../Assets/Images/canonicalImage.webp';
import canonicalImageBW from '../../Assets/Images/canonicalImageBW.webp';
import ObiImage from '../../Assets/Images/obiCover.webp';
import ObiImageBW from '../../Assets/Images/obiCoverBW.webp';
import rebrandImage from '../../Assets/Images/Cover-Rebrand.webp';
import rebrandImageBW from '../../Assets/Images/Cover-Rebrand-BW.webp';

export const contents = [
    {
        id: 1,
        name:'Canonical',
        image: canonicalImage,
        inactive:canonicalImageBW,
        link:'Canonical'
    } ,

    {
        id: 2,
        name:'Obi',
        image: ObiImage,
        inactive: ObiImageBW,
        link:'Obi'
    },

    {
        id: 3,
        name:'Ubuntu',
        image: rebrandImage,
        inactive: rebrandImageBW,
        link:'Ubuntu-Rebrand'
    }
]