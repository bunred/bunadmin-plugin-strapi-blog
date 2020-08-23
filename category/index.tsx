import React, { createRef } from "react"
import {
  CommonTable,
  CommonTableHead,
  tableIcons,
  CommonTableDefaultProps as DefaultProps
} from "@bunred/bunadmin"
import { useTheme } from "@material-ui/core/styles"

import { SchemaName, SchemaLabel, SchemaColumns } from "./plugin"
import { useTranslation } from "react-i18next"
import editableCtrl from "./controllers/editableCtrl"
import { dataCtrl } from "bunadmin-source-strapi"

export default function() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const tableRef = createRef()

  return (
    <>
      <CommonTableHead title={t(SchemaLabel)} />
      <CommonTable
        tableRef={tableRef}
        title={t(SchemaLabel)}
        columns={SchemaColumns({ t, tableRef })}
        editable={editableCtrl({ SchemaName })}
        // style
        style={DefaultProps.style}
        // icons
        icons={tableIcons({ theme })}
        // options
        options={{
          ...DefaultProps.options,
          filtering: true,
          fixedColumns: {
            left: 0,
            right: 1
          }
        }}
        // data
        data={async query => await dataCtrl({ query, SchemaName })}
      />
    </>
  )
}
