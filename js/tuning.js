	$(function(){
			// 소모 재화, 뽑은 레어도
			var tuningCount = 0;
			var setCount = 0;
			var tuningBinary = 0;
			var setBinary = 0;
			var tuningCredit = 0;
			var setCredit = 0;
			
			// 옵션변경 풀
			var optionPool = [];
			var setPool = [];
			
			// 세트 풀 초기화
			setPool.push('체력');
			setPool.push('공격');
			setPool.push('방어');
			setPool.push('치명');
			setPool.push('회피');
			setPool.push('명중');
			setPool.push('안티 스트라이커');
			setPool.push('안티 디펜더');
			setPool.push('안티 레인저');
			setPool.push('안티 스나이퍼');
			setPool.push('안티 서포터');
			setPool.push('안티 타워');
			setPool.push('안티 시즈');
			setPool.push('치명타 피해');
			setPool.push('스킬충전속도');
			setPool.push('공격속도');
			
			$("input[name='equip-type-radio']").change(function(){
				var changedId = $('input[name="equip-type-radio"]:checked').attr('id');
				
				gachaReset();
				
				if(changedId == 'equip-wep'){
					// 무기
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree1.png'/>");
					$(".equip-table tr:nth-child(2) td").text("대적자의 핸즈 T5");
					$(".equip-table tr:nth-child(3) td").text("공격력 +110");
					$(".equip-table tr:nth-child(4) td").text("vs지상 피해 5.0%");
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
					
				}else if(changedId == 'equip-def'){
					// 방어구
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree2.png'/>");
					$(".equip-table tr:nth-child(2) td").text("대적자의 케이스 T5");
					$(".equip-table tr:nth-child(3) td").text("체력 +924");
					$(".equip-table tr:nth-child(4) td").text("vs지상 피해감소 8.0%");
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
					
				}else if(changedId == 'equip-sub1'){
					// 보조 장비1
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree3.png'/>");
					$(".equip-table tr:nth-child(2) td").text("대적자의 크라운 T5");
					$(".equip-table tr:nth-child(3) td").text("명중 +132");
					$(".equip-table tr:nth-child(4) td").text("vs지상 피해 7.0%");
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
					
				}else{
					// 보조 장비2
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree4.png'/>");
					$(".equip-table tr:nth-child(2) td").text("대적자의 무브먼트 T5");
					$(".equip-table tr:nth-child(3) td").text("회피 +132");
					$(".equip-table tr:nth-child(4) td").text("vs지상 피해 7.0%");
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
				}
				
			})
			
			// navbar active설정
			$(".navbar-nav li:nth-child(6) a").addClass("active");
			
			// 가장 첫 채용을 기본선택
			$(".equip-type input:nth-child(1)").click();
			
			// 옵션2 변경
			$(".change-option2").click(function(){
				tuningCredit += 50400;
				tuningBinary += 13;
				tuningCount++;
				
				updateUseGoods();
			})
			
			// 세트 변경
			$(".change-set").click(function(){
				setCredit += 216000;
				setBinary += 8;
				setCount++;
				
				var afterSet = "";
				var newSet = "";
				
				do{
					afterSet = $(".equip-after tr:nth-child(6) td").text();
					newSet = setPool[Math.floor(Math.random()*setPool.length)];
				}while(afterSet == newSet)
				
				$(".equip-before tr:nth-child(6) td").text(afterSet);
				$(".equip-after tr:nth-child(6) td").text(newSet);
				
				updateUseGoods();
			})
			
			// 초기화
			$(".change-reset").click(function(){
				if(confirm("소모 재화를 초기화 하시겠습니까?")){
					gachaReset();
				}
			})
			
			// 변경 정보 초기화
			function gachaReset(){
				setBinary = 0;
				optionBinary = 0;
				setCount = 0;
				optionCount = 0;
				setCredit = 0;
				optionCredit = 0;
				
				updateUseGoods();
			}

			// 사용 재화 업데이트
			function updateUseGoods(){
				$(".tuning-count").text(numberWithComma(tuningCount));
				$(".tuning-binary-count").text(numberWithComma(tuningBinary));
				$(".set-count").text(numberWithComma(setCount));
				$(".set-binary-count").text(numberWithComma(setBinary));
				$(".set-credit").text(numberWithComma(setCredit));
				$(".tuning-credit").text(numberWithComma(tuningCredit));
			}
			
			// 콤마찍기 함수
			function numberWithComma(i){
				return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		})