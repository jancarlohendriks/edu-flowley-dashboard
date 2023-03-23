import React, { useState } from 'react'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'

const TableOutflow = ({ clients }: any) => {
  // clients?.sort((a: any, b: any) => b.avgRating - a.avgRating)

  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const clientsPaginated = clients?.slice(perPage * currentPage, perPage * (currentPage + 1))

  console.log(clientsPaginated)

  const numPages = clients?.length / perPage

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Theme</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {clientsPaginated.map((client: { id: number; link: string; count: number }) => (
            <tr key={client.id}>
              <td data-label="Name">{client.link}</td>
              <td data-label="Count">{client.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <BaseButtons>
            {pagesList.map((page) => (
              <BaseButton
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </BaseButtons>
          {/* <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small> */}
        </div>
      </div>
    </>
  )
}

export default TableOutflow
