#  Binary Classification of Water-immersed and Oil-immersed Electrodes Across Neural Network Models
This is an exploratory machine learning project aimed to compare the performance of different Neural Networks in classifying liquid-immersed capacitive sensor electrode signals.
The authors' aim is to systematically compare multiple different approaches to the same task. Three primary neural networks will be trained: Multi-Layer Perceptrons (MLP), Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN). Metrics such as accuracy, precision, recall and F1-score, will be used to determine the best neural network model for this task.

## Dataset
The dataset is retrieved from [Kaggle](https://www.kaggle.com/datasets/mexwell/binary-classification-for-sensor-signals), but was originally derived from Mahdi Saleh, Imad H. Elhajj and Daniel Asmar’s [study on digital sensor signals](https://dx.doi.org/10.21227/6a44-0880).

The dataset is composed of digital signals obtained from a capacitive sensor electrodes that are immersed in water or in oil. Each signal, stored in one row, is composed of 10 consecutive intensity values and a label in the last column. The label is +1 for a water-immersed sensor electrode and -1 for an oil-immersed sensor electrode. This dataset should be used to train a classifier to infer the type of material in which an electrode is immersed in (water or oil), given a sample signal composed of 10 consecutive values.
