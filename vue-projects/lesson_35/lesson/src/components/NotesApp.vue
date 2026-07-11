<script>
export default {
	data() {
		return {
			notes: [{
				title: 'Название',
				category: 'Обычная',
				text: 'Содержание карточки',
				categoryStyle: 'normal',
			}],

			titleInput: '',
			categoryStyleInput: 'normal',
			textInput: '',
		};

	},

	methods: {
		addNote() {
			const categoryMap = {
				normal: 'Обычная',
				important: 'Важное',
				study: 'Учёба',
			}

			if (!this.titleInput || !this.categoryStyleInput || !this.textInput) {
				return;
			}

			this.notes.push({
				title: this.titleInput,
				category: categoryMap[this.categoryStyleInput],
				text: this.textInput,
				categoryStyle: this.categoryStyleInput,
			})

			this.titleInput = '';
			this.categoryStyleInput = 'normal';
			this.textInput = '';
		}
	}
};
</script>

<template>
	<div class="notes-app mb-4">
		<div class="row row-cols-2 g-3 ">
			<!-- Форма -->
			<div class="col notes-app-form">
				<div class="form-floating">
					<input type="text" class="form-control" id="title" v-model="titleInput" />
					<label for="title">Название</label>
				</div>
				<div class="form-floating my-3">
					<select class="form-select" v-model="categoryStyleInput" id="category">
						<option value="normal">Обычная</option>
						<option value="important">Важное</option>
						<option value="study">Учёба</option>
					</select>
					<label for="category">Категория</label>
				</div>
				<textarea class="form-control my-3" rows="5" id="text" placeholder="Введите текст"
					v-model="textInput"></textarea>
				<div class="btn-group d-flex justify-content-center my-3">
					<button type="button" class="btn btn-outline-secondary" @click="addNote()">
						Сохранить
					</button>
				</div>
			</div>

			<!-- Заметки -->

			<div class="col">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 notes-container g-3">
					<div class="col" v-for="(note, index) in notes">
						<div class="card" :class="note.categoryStyle">
							<div class="card-body">
								<h5 class="card-title">{{ note.title }}</h5>
								<h6 class="card-subtitle mb-2 text-muted">{{ note.category }}</h6>
								<p class="card-text">{{ note.text }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.important {
	background-color: rgba(224, 105, 240, 0.664);
}

.study {
	background-color: rgb(140, 240, 140);
}

.card {
	flex-grow: 1;
}

.col.notes-app-form {
	margin-top: 20px;
}
</style>
