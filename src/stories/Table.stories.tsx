import React, { useMemo } from "react";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { Column, useTable } from "react-table";
import { Meta } from "@storybook/react";
import Table from "../components/Table/Table";

type Post = {
  id: number,
  title: string,
  views: number,
  author: {
    name: string,
    avatar: string
  },
  conversions: {
    thousands: number,
    percentage: number
  }
}

export default {
  title: 'Example/Table',
  component: Table
} as Meta;

export function Default() {
  const data = useMemo<Post[]>(() => [
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
      },
      id: 1,
      conversions: {
        percentage: 64.35,
        thousands: 607,
      },
      title: 'Como dobrei meu salário aprendendo somente React',
      views: 985415
    },
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
      },
      id: 2,
      conversions: {
        percentage: 64.35,
        thousands: 607,
      },
      title: 'React.js vs. React Native: a REAL diferença entre os dois',
      views: 985415
    },
    {
      author: {
        name: 'Daniel Bonifacio',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
      },
      id: 3,
      conversions: {
        percentage: 95.35,
        thousands: 845,
      },
      title: 'Como dobrei meu salário aprendendo somente React',
      views: 985415
    }
  ], [])

  const columns = useMemo<Column<Post>[]>(() => [
    {
      Header: '',
      accessor: 'id',
      Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />
    },
    {
      Header: 'Artigo',
      accessor: 'title',
      width: 320,
      Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', gap: 8, alignItems: 'center' }}>
        <img width={24} height={24} src={props.row.original.author.avatar} alt={props.row.original.author.name} />
        {props.value}
      </div>
    },
    {
      Header: 'Views',
      accessor: 'views',
      width: 320,
      Cell: (props) =>
        <div style={{ textAlign: 'right', fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          {props.value.toLocaleString('pt-br')}
        </div>
    },
    {
      Header: 'Conversões',
      accessor: 'conversions',
      Cell: (props) =>
        <div style={{ display: 'flex', gap: 8, fontWeight: 700, fontFamily: '"Roboto mono", monospace' }}>
          <span>{props.value.thousands}k</span>
          <span style={{ color: '#09f' }}>{props.value.percentage}%</span>
        </div>
    },
    {
      Header: 'Ações',
      Cell: () =>
        <div style={{ textAlign: 'right' }}>
          todo: actions
        </div>
    }
  ], [])

  const instance = useTable<Post>({ data, columns })

  return <Table<Post> instance={instance} />
}
