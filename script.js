const summaryButton = document.getElementById('summaryButton').addEventListener('click', summary)

function summary(){
  const material = document.getElementById('material').value
  const weight = document.getElementById('weight').value
  const time = document.getElementById('time').value
  const summaryBlock = document.getElementById('summary')

  // Конечная стоимость (Цена материала / на вес / 1000) + Время работы (Часы * ЭлЭн + Амортизация) + Пост-обработка
  // Цена материала
  let materialCost
  if (material == 'pla' || material == 'petg'){
    materialCost = 1200
  } else {
    materialCost = 2500
  }

  // Себестоимость (Цена материала / на вес / 1000) + Время работы (Часы * ЭлЭн + Амортизация)
  let selfCost = materialCost * (weight / 1000) // Себестоимость детали в материале

  // Время работы состоит из времени * Энергопотребления 7р кВт/ч + амортизации (100р)

  // Энергопотребление
  // Потребялемая мощность FDM 0.3 кВт/ч
  // Потребляемая мощность Resin 0.05 кВт/ч

  // Амортизация
  // 100 рублей за час работы
  const amortizationWash = 100 // рублей за 30 минут промывки засветки с учетом стоимости спирта 200/л
  const electroPower = 7 // рублей 1кВт/ч

  let electroPowerCost = time * electroPower + 100 // Себестоимость детали в работе оборудования. 100 рублей амортизация

  let result
  if (materialCost == 1200){
    result = selfCost + electroPowerCost
  } else {
    result = selfCost + electroPowerCost + amortizationWash
  }

  summaryBlock.innerText =  Math.ceil(result) + '.руб'
}



