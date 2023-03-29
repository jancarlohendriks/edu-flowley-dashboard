import React, { useState } from 'react'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'

const TableOutflow = ({ clients }: any) => {
  const perPage = 5
  const [currentPage, setCurrentPage] = useState(0)
  const clientsPaginated = clients?.slice(perPage * currentPage, perPage * (currentPage + 1))
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
            <th>Link</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {clientsPaginated.map((client: { id: number; link: string; count: number }) => (
            <tr key={client.id}>
              <td data-label="Name">
                <span
                  style={{
                    wordBreak: 'break-all',
                  }}
                >
                  {client.link}
                </span>
              </td>
              <td data-label="Clicks">{client.count}</td>
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
        </div>
      </div>
    </>
  )
}

export default TableOutflow
