let a: number | null = 44;

type TTest = {
  name:string,
  age: number
}

type TCourse = {
  id: number,
  courseName: string,
  name: string
}

const b: TTest = {
  age: 1,
  name: '123'
}

const testCourse: TCourse = {
  courseName: '123',
  id: 1,
  name: '123'
}

// type TUniqType = TCourse | TTest
type TUniqType = TCourse & TTest

const t: TUniqType = {
  age:12,
  name: '123',
  id: 1,
  courseName: '123'
}
// b.name
//
// const checkType = (a: unknown): a is TCourse => typeof a === 'object' && !!(a as TCourse).courseName
//
// if (checkType(b)) {
//   b.courseName
// }

type TPartialUser = Partial<TTest>;




type TData<C> = {
  data: C[];
  pagination: {
    total: number
    currentPage: number
  }
}

type TUserData = TData<TTest>
type TDataCurs = TData<TCourse>

