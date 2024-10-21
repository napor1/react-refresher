import { useEffect, useState } from "react"
import * as Icons from 'react-icons/ai'

export function IconList() {
  const [icons, setIcons] = useState<any>({});
  const TestIcon = icons['AiFillAccountBook'];

  useEffect(() => {
    setIcons(Icons);
  }, [])
  return <div>
    IconList
    {icons['AiFillAccountBook'] && <TestIcon />}
  </div>
}