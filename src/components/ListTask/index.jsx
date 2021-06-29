import React from 'react'
import PropTypes from 'prop-types'
import ListTaskItem from 'components/ListTaskItem'

const ListTask = ({ taskList, handleImportant, handleComplete, handleDelete }) => {
  return (
    <section>
    {

      taskList.map((taskprops) => 
        <ListTaskItem
          handleImportant={handleImportant}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          taskprops={taskprops}
          key={taskprops.id}
        />
      )

    }
  </section>
  )
}

ListTask.propTypes = {
  taskList: PropTypes.array.isRequired,
  handleImportant: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default ListTask
