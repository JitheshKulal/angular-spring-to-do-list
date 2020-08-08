package com.jtscodes.springbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jtscodes.springbackend.model.Task;

public interface TaskRepository extends JpaRepository<Task,Long> {
	
	public List<Task> getTasksByHolderName(String holderName);
}
