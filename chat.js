let caseNo
let contStatus
let prob
let mailType
let escType
let account_id
let txt_tier
let txt_closing = ""
let txt_ack = ""
let txt_name = ""
let txt_email = ""
let txt_phone_no = ""
let txt_prob = ""
let txt_ref = ""
let txt_clone = ""
let pol_aid
let pol_ads
let pol_link
let txt_cagain2
let conv_log = ""
let summary = ""
let sum_a = ""
let sum_q = ""
let txt_summary = ""
let waitmin = 5
let clncases = []

const txt_omatase = "\nチャットが混み合っており、大変長らくお待ちいただき、誠にありがとうございます。"
const txt_open2 = `Metaプロチームにご連絡いただきありがとうございます。本日担当させていただきます西岡と申します。`
const txt_helpctr = "Facebook広告に関しまして詳しくは下記広告主様向けヘルプセンターをご参照くださいませ。\nhttps://www.facebook.com/business/help"
const txt_gsospt = "尚、お客様の広告アカウントは以下のサポートチャンネルもお問い合わせ可能でございますので、どうぞご利用くださいませ。\nfacebook.com/business/help"
const txt_svy = `※※サポートスタッフの対応について※※` +
		`\nこの後サポートスタッフの対応につきまして短いアンケートがチャット内にてご送付されますので、今回のサポートのご意見・ご感想をお聞かせ下さいませ。` +
		`\nお客様からのフィードバックは、今後のサービス向上・改善の為に活用させて頂きます。`
const txt_spthour = `Facebook広告のオンラインサポート対応時間が変更となり、現在は月～土（8:15～19:30）でご対応をしております。` +
		`\n\n今後とも何卒宜しくお願い致します。`
const txt_cagain = "またご不明な点等ございましたらいつでもチャットへお越し下さいね。\n"
const txt_tq1 = "こちらこそ本日はお時間いただきありがとうございました。"
const txt_tq2 = "Metaプロチームにお問い合わせいただきありがとうございました。"
const txt_tq3 = "以上、お役に立ちましたら幸いでございます。"

const txt_apl4 = "ご不便をお掛けしております。"
const txt_apl5 = "ご迷惑をお掛けして申し訳ございません。"
const txt_apl6 = "この度は、ご迷惑をお掛けして申し訳ございません。"
const txt_continue_email = "引き続き対応させていただきます。"
const txt_continue_aplg = "この度はご迷惑をおかけして申し訳ございません。改めてご連絡させていただきます。"

const txt_envideo = "本件につきましては、技術部門に調査を依頼させていただきますね。"
const txt_envideo2 = "\nつきましては、開始から問題の事象が発生するまでの一連の作業について、スクリーンキャプチャ(動画）を英語にてご提供いただけますと幸いです。"
const txt_envideo3 = "\n併せまして、作業されている方のユーザIDもしくはFacebookご登録のEメールもご教示いただけますと幸いです。"
									+ "\nまた、担当者がお客様のアカウントにログインして問題の再現を試みることにご同意いただけますと幸いです。"

const txm_chatend = "先ほどはお忙しいようでしたので、一旦チャットを終了させて頂きましたがその他にご質問がございましたらお気軽にお問い合わせください。"
const txm_NETRTPilot = `先ほどはご多用のところチャットにお越しいただきありがとうございました。\n`


const txm_anyissue = "本件につきまして、何かございましたらお気兼ねなくご連絡くださいませ。"
const txm_tqe = "この度はお問い合わせいただきありがとうございました。"
const txm_tqfu = "今後ともよろしくお願いいたします。"
const txm_sender = "西岡\nMeta Pro Team | To learn more about supporting your business with Meta visit: https://www.facebook.com/business/help and https://www.facebook.com/business/learn"
const txm_invs = "現在、担当部署に調査を依頼しておりますので回答があり次第追ってご連絡させていただきますね。"
const txm_wait2 = "お急ぎの所誠に恐縮ではございますが、今しばらくお待ちいただけますと幸いでございます。"

const txt_changelng = "Facebookの言語設定でございますが、例えば以下のリンクに行っていただきますと【日本語】ボタンがございます。\n" +
						"そちらをクリックして英語にご変換いただき、該当画面をリフレッシュしていただきますとインターフェースの言語が英語になります。\n\n" +
						"https://www.facebook.com/help/"
const txt_iglng = "Instagram アプリで言語を変更する方法についてこちらの記事をご参照ください。\n【言語設定を変更するにはどうしたらよいですか。】\nhttps://www.facebook.com/help/instagram/111923612310997"
const txt_repro = "また、担当者がお客様のアカウントにログインして事象の再現を試みることにご同意いただけますと幸いです。"
const txm_review = "お忙しいところ恐れ入りますが上記ご確認いただきますようお願い申し上げます。"
const txt_reset = "念のため一度広告マネージャのリセットを行っていただくことは可能でしょうか？\nまた、リセットを行われますと下書きがクリアになりますので、ご確認いただけますと幸いでございます。\nリセットを行われてもすでに公開されている広告には影響はございません。"
const txt_troubleshoot = "該当の事象につきまして、ブラウザ、コンピュータに原因がある可能性もございますので、（また、一時的なエラーの可能性もございますので）、一度下記手順を行っていただきますようお願いいたします。\n" +
			"ステップ\n" +
			"1: インターネット接続を確認する\n" +
			"2: キャッシュを消去する\n" +
			"3: 他のタブ、拡張機能、アプリをすべて閉じる\n" +
			"4:メモリを開放する\n" +
			"5: 端末を再起動する\n\n" +
			"上記のステップを踏まれて24時間ほど時間を置いて頂いた後も未だ同様の事象が続くような場合は、引き続き対応させて頂きますので、ご連絡くださいませ。"
const txt_cache = "【キャッシュのクリア】\nhttps://www.facebook.com/help/1416643995215690"

const txt_opn = "この度は、貴重なご意見をお寄せいただき誠にありがとうございました。"
const txt_nofunctionality = "ご希望に沿う機能がなく大変残念に存じます。"
const txt_wlcsgt1 = "Facebookではいつでもサービスや品質の向上に努めており、お客様からのご意見を取り入れておりますので、\n"
const txt_wlcsgt2 = "について、是非こちらよりお聞かせ頂ければ幸いです。\nhttps://www.facebook.com/help/contact/268228883256323"
const txt_notavail ="の機能は一部のアカウント（またはクライアント様）のみでご利用いただける機能でございまして、ご迷惑をお掛けしております事お詫び申し上げるのと共に上記ご了承いただければ幸いです。"
const txt_benefit_others = "いただいたご意見は、他のユーザ様でも役に立つ機能と存じますので、\nぜひ上記フォームよりご意見をお寄せいただけますと幸いです。"
const txt_wanted = "他の広告主様からも関心の高い機能と思いますので、ぜひご意見をお寄せいただけますと幸いです。"

const txm_nointr1 = "Facebook広告サポートにお問合せ頂きましてありがとうございます。\n" +
		"残念ながらご退席されているようですのでチャットはこちらで終了させて頂きますが、引き続きメールにてサポートを続けさせて頂きますので、\n" +
		"これよりお問合せに関していくつかご質問を"
const txm_nointr2 = "へメールを送付させて頂きますね。\n\n" +
		"もしその他にご質問や、再度チャットでのサポートをご希望の場合はお気軽にサポートポータルへとお越し頂き新規のお問い合わせを頂ますと幸いでございます。"
const txm_nointr3 =	"ご返信がないものの既にご質問をお伺い済みのようでございますので、本日はこちらでチャットを終了させて頂きますね。\n"
const txm_nointr4 =	"残念ながらご返信がありませんでしたので、こちらのチャットセッションは終了となります。 何卒ご理解とご協力を賜りますようお願い申し上げます。\n" +
"後日お問い合わせの際は、以下のリンクから特別広告サポートチャンネルにアクセスしていただけます。 新たにお問い合わせいただいた場合は、喜んでお手伝いさせていただきます。\n" +
"：www.facebook.com/business/help\n\n" +
"本日もよい一日をお過ごしください。メタコンシェルジュサポートにお問い合わせいただきありがとうございます。\n"


const txt_svy_cl = "それぞれのお問い合わせにつきまして、短いアンケートが送付されますので、今回のサポートのご意見・ご感想をお聞かせいただけますと幸いです。\n"

const txt_appeal = "広告審査に関しましては、専任のポリシーチームの裁量でございますため、こちらカスタマーサポートでは詳細はわかりかねるのですが、"
const txt_disapproved = "この度は広告が非承認になってしまって、お困りとのことでございますね。\nご不便をお掛けしております。"
const txt_want_review = "広告の再審査ご希望の旨かしこまりました。"
const txt_pending = "この度は広告がずっと審査中でお困りとのことでございますね。\nご不便をお掛けしております。"
const txt_schedule = "今後、お急ぎの際は広告を事前にスケジュールしていただくこともお勧めいたします。\n" +
			"広告をスケジュールしていただくと、事前に承認された広告をご希望の時間から配信していただくことが可能でございます。\n\n" +
			"参考：【Facebook広告の審査の概要】\n" +
			"https://www.facebook.com/business/a/ad-review-process"
const txt_review_process = "通常審査にかかるお時間は24時間以内でございますが、\n審査中の広告が多い場合更にお時間がかかってしまうこともございます。"
const txt_wait_review = "広告を作成・編集されるたびに承認プロセスが開始し、通常、広告は24時間以内で審査されますが、場合によってはさらにお時間がかかります。\n\n" +
			"【広告が承認待ちというのはどういう意味ですか。】\n" +
			"https://www.facebook.com/business/help/204798856225114\n\n" +
			"もし、２４時間経過しても「審査中」のステータスのままでございましたら、別途こちらからも担当部署へ再審査依頼が可能でございますので、その際はこちらにお越しいただけましたら、引き続きサポートさせていただきます！\n\n" +
			"【広告の承認プロセス】\n" +
			"https://www.facebook.com/business/a/ad-review-process"
const txt_ccwhitelist = "= Credit Card Whitelist =\n" +
			"・該当クレジットカード情報 (上6桁/下4桁番号, 有効期限)\n" +
			"First six digits of card:\n" +
			"Last four digits of card:\n" +
			"Valid Thru:\n" +
			"・現在紐づいている Ad account ID:\n" +
			"・今後紐づけたい Ad account ID:\n"
const txt_ccfailed = "= Failed Payment =\n" +
			"First six digits of card:\n" +
			"Last four digits of card:\n" +
			"Valid Thru:\n" +
			"Ad account ID:\n"
const txt_spendlimit =
			"Current DSL: \n" +
			"Desired DSL Amount: "
const txt_sme = "UID: Done\nPermission to login: Yes\nVideo: Attached\nAsk: No"
const txt_mvsinternal = "1) Brief summary of the Advertiser's issue steps that you've already taken to troubleshoot:  \n" +
						"*Basic troubleshooting has been done on the client end \n" +
						"** We have the client's consent to login for repro \n\n" +
						"2) Repro steps: \n" +
						"3) Links to the relevant campaign, post, billing summary and/or Page:  \n"
const txt_prereview = "= Ads Pre-Check =\n" +
					"1. Text: \n" +
					"2. Landing Page URL: \n" +
					"3. Image/Video: Attached\n" +
					"4. Ads Manager ID: \n" +
					"5. Duration: \n" +
					"6. Budget: "
const txt_pre_req = "審査部門へ事前審査リクエストするにあたり下記情報もいただけますと幸いです。\n" +
					"1. 広告のテキスト: \n" +
					"2. ランディングページのURL: \n" +
					"3. クリエイティブ画像、動画\n" +
					"4. 広告アカウントID: \n" +
					"5. 掲載期間: \n" +
					"6. およその予算: "
const txt_esc_precheck = "Pre-Escalation Checklist:\n\n" +
					"* Have Basic Troubleshooting Steps (KB 348603792738636): Y\n" +
					"* Have all resources (e.g KB, GMS Hub, Task Tool) been exhausted?: Y\n" +
					"* Ensure issue does not fall within BPS Unsupported Products (KB 2321434474771553)?: Y\n" +
					"* Ensure issue relates to Ads products and NOT Organic features?: Y\n" +
					"* Is this a Widespread Issue (WSI) KB 1199035840262486? - Provide attached Task ID if Yes: N\n" +
					"* Are all information present (relevant IDs, screenshot/cast & permission to repro): Y"
const txt_ask_adid = "広告IDもいただけますと幸いです。"
const txt_acc_disabled = "この度は広告アカウントが急に停止になってしまってお困りとのことでございますね。\nご不便をお掛けしております。"
const txt_ask_reactivate = "審査部門にアカウントを再開できるかどうか確認してみることは可能でございます。\nご希望されますでしょうか?"
txt_cantcommit = "実際の審査は専任部門の裁量となっておりますので、こちらの広告サポート窓口からはご確約いたしかねますこと、ご理解いただけますと幸いです。"
txt_cantcommit_time = "専任部門の裁量となっておりますので、こちらの広告サポート窓口からはお時間についてご確約いたしかねますが、お急ぎの旨は伝えさせていただきますので、何卒ご了承いただけますと幸いです。"
const txt_screen = "確認させていただきますので、ご覧になっている画面全体のスクリーンキャプチャをいただけますでしょうか。"
const txt_tkexp = "ご事情をご説明いただきありがとうございました。"
const txt_tkundst = "ご理解いただきまして誠にありがとうございます。"
const txt_devsupport = "本件についてのご質問等は＜開発者サポート＞までお願いいたします。\nhttps://developers.facebook.com/support/ \n\n" +
			"またこちらのコミュティもご利用いただけますと幸いです。\nhttps://www.facebook.com/groups/fbdevelopers/"
const txt_devsite = "内部で確認を致しましたが、今回ご質問頂いている件に関しましてはあいにくこちらのサポートでは詳細情報を所有しておりませんので恐れ入りますがFacebook Developer Siteへ直接お問い合わせいただけますと幸いでございます。\n" +
			"そちらの方が詳しく聞いていただけるかと存じますので、恐れ入りますがどうぞ宜しくお願いいたします。"
const txt_nocontact = "内部で確認をさせて頂きましたところ、大変残念ではございますがあいにくこちらから該当の件を対応した担当部署へ連絡する手段を持っていないため申し訳ございませんがこれ以上お手伝いすることはできかねます。\n" +
			"大変申し訳ございませんが何卒ご理解とご了承の程いただけますと幸いでございます。"
const txt_rpt_igissue = "Instagramで技術的な問題を見つけられた場合は、アプリからご報告いただけますので、ご利用いただけましたら幸いでございます。\n" +
			"【Instagramの技術的な問題を報告するにはどうすればよいですか。】\n" +
			"https://www.facebook.com/help/instagram/381579045265733?helpref=related"
const txt_promptsurvey1 = "無事にご不明点が解消されたとのこと、大変嬉しく思います。\nこの後、チャット終了後に、アンケートが送付されますので、ぜひ、"
const txt_promptsurvey2 = "今後のサービス向上・改善の為に活用させて頂きますので、\nこちらのリンクからもぜひご意見・ご感想をお聞かせ頂ければ幸いです。\nhttps://www.facebook.com/help/contact/268228883256323\nこの度は、Metaプロチームにご連絡いただき、誠にありがとうございました。"
const txt_loginapprv = "また、調査依頼に際しまして、担当者がお客様のアカウントにアクセスして事象の再現を試みる必要が万一生じた場合について事前に一言ご了解いただけますと幸いです。\n" +
			"※広告配信等への影響はございませんのでご安心くださいませ。"
const txt_proffound = "にて個人プロフィールの確認が取れました。\nログインへのご同意も誠にありがとうございます。"
const txt_profnotfound = "恐れ入りますがいただいたEメールではFacebook個人プロフィールご登録のEメールに該当はございませんでした。\n" +
													"メインメールに登録されておりますアドレスをご共有いただけますでしょうか。\n\n" +
													"「Facebook個人プロフィールご登録のEメールの確認」\n" +
														"1. [設定とプライバシー] > [設定]の順に選択します\n" +
														"（https://www.facebook.com/settings）\n" +
														"2. 左側のメニューで、[一般]をクリックします\n" +
														"3. こちらの管理画面の「連絡先」と表記されているものがFacebookプロフィールに登録のメールアドレスとなります\n"

const txt_task_init = "Hi team,\n\nThank you for your support on this.\n" +
											"Please refer to the video/screenshot attached.\nThank you,\n\n" +
											"Regards,\nMiwa"
const txt_closing_done = "So, please help us improve by taking a few seconds to complete a short survey about your experience chatting with me today, which you'll receive it shortly within this chat. \n" +
											"I will definitely appreciate your feedback. Thank you for contacting Meta Pro Team and I hope to chat with you again soon. Have a wonderful day ahead and stay safe."
const txt_closing_esc1 = "Since there are no further queries, I will proceed to end this chat for now. Rest assured, I will be in touch with you as soon as I have a feedback on this. \n" +
													"Thank you for contacting Meta Pro Team and have a wonderful day ahead, "
const txt_broken_chat = "現在チャットシステムの一時的な不具合により、私の方でお客様のメッセージが表示されなくなっております。\n\n" +
												"ご不便をおかけして申し訳ございません。\n\n" +
												"このためこちらのチャットはメールに切り換えて、引き続き対応させていただきます。\n"
const txt_broken_email = "先ほどはお客様のメッセージがこちらで確認できず一旦チャットを終了させて頂き大変失礼いたしました。\n改めてお詫び申し上げます。\n\n"
const txt_dup_nores = "サポート担当者より調査担当部署に確認のご連絡をさせて頂いているのですが、恐らくお問合せが混みあっており、現在もご返答を頂けていない状況にございます。\n\n" +
											"お客様が再度チャットまでお越し頂いたことを前件の担当者および調査担当部署の方にお伝えさせて頂きます。\nお急ぎの所、誠に恐縮ではございますが、今しばらくお待ちいただけますと幸いでございます。"
const txt_dup_apl = "この度はお急ぎのところ長らくお待たせしており、誠に申し訳ございません。"
const txt_dup_reminded = "只今私の方からも再度催促させていただきました。"
const txt_mayphone = "私共からお電話を差し上げる可能性もございますため、お問い合わせフォームに記載いただきました電話番号とメールアドレスに相違がないかどうかご確認いただけますでしょうか。\n"
const txt_phoneprivacy = "個人情報の取り扱いには徹底しておりますので、ご安心くださいませ。"

function setOpening(lang) {
	setCusName()
	caseNo = document.getElementById("case-no").value
	let txt_opening = ""
	if(txt_name.length > 0 && caseNo.length > 0){
		if(lang == "1"){
			txt_opening = `${txt_name}さま、`+ getGreeting() + txt_open2
			if(document.getElementById("check90").checked){
				txt_opening += txt_omatase
			}
			txt_opening += `\n本件のお問い合わせ番号は${caseNo}でございます。`
		}else{
			txt_opening = `Hi ${txt_name},\n`+
			"Thank you for contacting Meta Pro Team! My name is Miwa and I'll be assisting you on your inquiry.\n" +
			`The reference ID is ${caseNo}, `
			if(document.getElementById("check90").checked){
				txt_opening += "and thank you for patiently waiting on chat.\n"
			}
		}

		setSummary()

		if(summary.length  > 0){
			if(lang == "1"){
				txt_opening += `\n本日は「${summary}」に関してお問い合わせいただきありがとうございます。\nどうぞよろしくお願い致します。`
			}else{
				txt_opening += `I will be helping you with (${summary}).`
			}
		}else{
			if(lang == "1"){
				txt_opening += `よろしくお願い致します。 \n本日はどういったお問い合わせでしょうか？`
			}else{
				txt_opening += `How may I assist you today?`
			}
		}
		if(lang == "1"){
			txt_opening += "\n\n" + getPhoneConfirm()
		}
		setTxtarea(txt_opening)
	}
}

function setCusName(){
	if(document.getElementById("cus-name").value.length > 0){
		txt_name = document.getElementById("cus-name").value
	}
}

function setEmail(obj){
	txt_email = obj.value
}

function setCont(obj){
	contStatus = obj.value
	// if(contStatus != "donec" && txt_email.length == 0){
	// 	alert("Confirm Email!")
	// }
}
function setTier(obj) {
	txt_tier = obj.value
	if(contStatus == "donec"){
		setClosing()
	}
}

function setPhoneNo(obj){
	txt_phone_no = obj.value
}

function setClosing(){
	txt_closing = ""
	// summary
	setSummary()


	if(contStatus == "en_done" || contStatus == "en_esc"){
		if(contStatus == "en_done"){
			txt_closing += `To recap, we chatted about ${summary}.`
			txt_closing += "\n\n"
			txt_closing += txt_closing_done
		}else{
			caseNo = document.getElementById("case-no").value
			if(caseNo.length == 0){
				window.alert("No Case ID!")
			}else{
				txt_closing += `You can also use the Case ID: 【${caseNo}】 should you wish to follow up on the status of this.`
				txt_closing += "\n\n"
				txt_closing += txt_closing_esc1
				if(txt_name.length > 0){
					txt_closing += `${txt_name}, `
				}
				txt_closing += `take care! :)`
			}
		}
	}else{
		setSummary()
		if(sum_q.length == 0){
			window.alert("Please enter closing summary!")
		}else{
			txt_closing = ""
			txt_closing += `本日は`
			txt_closing += sum_a.length > 0 ? "下記" :  `『${sum_q}』`
			txt_closing += `の件についてご対応させて頂きました。`
			if(sum_a.length > 0){
				txt_closing += `\n【ご質問】`
				txt_closing += `${sum_q}`
				txt_closing += `\n【ご回答】`
				txt_closing += `${sum_a}`
			}
			txt_closing += `\n\n`
		}

		if(contStatus == "donec"){
			txt_closing += txt_svy
		}else if(contStatus == "email"){
			txt_closing += txt_continue_email
		}else if(contStatus == "incv"){
			txt_closing += txt_continue_aplg
		}else if(contStatus == "dupmail"){
			const dupcase = document.getElementById("dup-case").value
			if(dupcase.length >0){
				txt_closing += `本件については引き続きお問い合わせ番号：${dupcase}にてご対応させていただきます。`
			}
		}else if(contStatus == "emailupdate"){
			const cusEmail = document.getElementById("cus-email").value
			txt_closing += "お時間頂く場合もございますが、アップデートあり次第、チャットで入力いただいたメールアドレス"
			txt_closing += cusEmail.length > 0 ? `: ${cusEmail}`:""
			txt_closing += "までご連絡をさせていただきます。"
		}
		txt_closing += "\n\n"
		txt_closing += txt_tq2 + "\n今後とも何卒宜しくお願い致します。\n"
		// case number
		caseNo = document.getElementById("case-no").value
		if(caseNo.length == 0){
			window.alert("No Case ID!")
		}else{
			txt_closing +=`\n※本ケースのお問い合わせ番号： ${caseNo}\n\n`
		}
	}

	setTxtarea(txt_closing)
}

function setAck(obj){
	prob = document.getElementById("prob").value
	const ack = obj.value
	txt_ack = ""
	if(ack == "apologize"){
		txt_ack += "さようでございますか。この度は"
		txt_ack += prob
		txt_ack += "とのこと、"
		txt_ack += txt_apl4
		contStatus = "incv"

	}else if(ack == "inconvenience"){
		txt_ack += "さようでございますか。この度は"
		txt_ack += prob
		txt_ack += "てお困りとのことでございますね。"
		contStatus = "incv"
	}else if(ack == "wish"){
		txt_ack += prob
		txt_ack += "ご希望の旨かしこまりました。"
	}else if(ack == "inquiry"){
			txt_ack += prob
			txt_ack += "とのお問い合わせでございますね。"
	}else if(ack == "detail1"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』⇒につきまして、具体的にどのようなことをされたいと考えていらっしゃるのかご共有いただけますと幸いです。"
	}else if(ack == "detail2"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』⇒につきまして、詳しくご教示いただけますと幸いです。"
	}else if(ack == "detail3"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』⇒ " +　txt_screen
	}else if(ack == "detail4"){
		txt_ack += "早速ですが、『"
		txt_ack += prob
		txt_ack += "』についてご質問をお伺いいたします。 "
	}else if(ack == "about"){
		txt_ack += prob
		txt_ack += "に関するご質問でございますね。はい、お伺いいたします。"
	}else if(ack == "bracket"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』　⇒　"
	}else if(ack == "brccorrect"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』　⇒　ご認識通りでございます。"
	}else if(ack == "brccorrect2"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』　⇒　ご認識通りかと存じます。"
	}else if(ack == "brcconfirm"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』　⇒　承知いたしました。"
	}else if(ack == "brcwait"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』　⇒　はい、お待ちします！"
	}else if(ack == "brclstn"){
		txt_ack += "『"
		txt_ack += prob
		txt_ack += "』　⇒　はい、お伺いいたします！"
	}else if(ack == "video_steps"){
		txt_ack += txt_envideo + '\n'
		txt_ack += `つきましては、「${prob}」様子がよくわかるよう、スクリーンキャプチャ(動画）を英語にてご提供いただけますと幸いです。\n`
		txt_ack += '\n' + txt_changelng
	}
	setTxtarea(txt_ack)
}

function setAdAccountID(){
	account_id = document.getElementById("adaccount-id").value
}

function confirmAID(obj){
	account_id = obj.value
	if(account_id.length >0){
		const txt_accid = `広告アカウントIDは${account_id}でよろしいでしょうか？`
		setTxtarea(txt_accid)
	}
}

function confirmPhone(){
	if(txt_phone_no.length >0){
		const txt_acphone = txt_mayphone + "\n" + `+${txt_phone_no}\n`
		+ `${txt_email}\n`
		+  "\n" + txt_phoneprivacy
		setTxtarea(txt_acphone)
	}
}

function getPhoneConfirm(){
	const txt_acphone = txt_mayphone + "\n" + `+${txt_phone_no}\n`
	+ `${txt_email}\n`
	+  "\n" + txt_phoneprivacy
	return txt_acphone
}

function setInfoConfirm(){
	setAdAccountID()
	if(document.getElementById("adaccount-id").value.length >0){
		const info1 = document.getElementById("info1").value
		setTxtarea(`${info1}は${account_id}でよろしいでしょうか？`)
	}
}

function setInfo1(){
	const info1 = document.getElementById("info1").value
	setTxtarea("よろしければ、"　+ info1 + "もご教示いただけますと幸いです。")
}

function setInfo2(){
	const info1 = document.getElementById("info1").value
	setTxtarea("すでにご記入いただいている場合も情報保護の観点から、改めて、"　+ info1 + "をご教示いただけますと幸いです。")
}

function setInfoThank(){
	const info1 = document.getElementById("info1").value
	setTxtarea(info1 + "をご提供いただきありがとうございます。")
}

function setMinute(min){
	waitmin = min
}

function setWaitTime(){
	let txt_wait = ""
	if(document.getElementById("more").checked){
		txt_wait += "詳しく確認させていただきますので、更に"
	}else if(document.getElementById("recap").checked){
		txt_wait += "おまとめしておりますので"
	}else{
		txt_wait += "確認させていただきますので、"
	}
	txt_wait += `お時間${waitmin}分ほどお待ちいただけますと幸いです。`
	setTxtarea(txt_wait)
}

function setNoIntraction(obj){
	const nointraction = obj.value
	let txt_nointr = ""
	if(txt_name.length > 0){
		txt_nointr += `${txt_name}さま、`
	}
	if(nointraction == "ikaga"){
		txt_nointr += "恐れ入りますが、いかがでしょうか？"
	}else if(nointraction == "oiso"){
		txt_nointr += "恐れ入りますが、お忙しいようでしょうか？"
	}else if(nointraction == "ira"){
		txt_nointr += "恐れ入りますが、いらっしゃいますでしょうか？"
	}else if(nointraction == "tunaga"){
		txt_nointr += "恐れ入りますが、今つながっていらっしゃいますでしょうか？"
	}else if(nointraction == "gokaku"){
		txt_nointr += "恐れ入りますが、ご確認いただいておりますでしょうか？"
	}else if(nointraction == "systemno"){
		txt_nointr = "一定時間以上ご返信のない場合、チャットは終了になってしまいます。\nまだつながっていらっしゃいましたら引き続きご対応させていただきますので、お知らせくださいね。"
	}else if(nointraction == "taiseki"){
		txt_nointr = "申し訳ございません。既にご退席されていらっしゃるようですので、一旦チャットを終了させていただきます。 また何かございましたらお気軽にお問い合わせください。"
		contStatus = "email"
	}else if(nointraction == "toemail"){
		txt_nointr = "こちらのチャットはメールに切り換えて、引き続き対応させていただきます。"
		contStatus = "email"
	}
	setTxtarea(txt_nointr)
}

function setNoFunct(){
	let txt_nofunct = ""
	if(txt_name.length > 0){
		txt_nofunct += `${txt_name}さまの`
	}
	txt_nofunct +=　txt_nofunctionality
	setTxtarea(txt_nofunct)
}

function setPromptSurvey(){
	let txt_nofunct = txt_promptsurvey1
	if(txt_name.length > 0){
		txt_nofunct += `${txt_name}さまの`
	}
	txt_nofunct +=　"ご意見・ご感想を頂ければ幸いです。"
	setTxtarea(txt_nofunct)
}

function setSelfHelpLink(obj){
	const self = obj.value
	switch (self) {
		case "1":
			selfService("非承認広告", "却下された広告に関する異議申し立て","https://www.facebook.com/help/contact/1582364792025146")
			break
		case "2":
			selfService("支払いと広告マネージャの停止", "支払いと広告マネージャが停止されました","https://www.facebook.com/help/contact/391647094929792")
			break
		case "3":
			selfService("ポリシー違反で停止した広告アカウント", "停止した公式アカウントに関するヘルプ","https://www.facebook.com/help/contact/2026068680760273")
			break
		case "4":
			selfService("停止されたビジネスアカウント", "停止されたビジネスアカウントの審査をリクエスト","https://www.facebook.com/help/contact/2166173276743732")
			break
		case "5":
			selfService("セキュリティチェックのためログインできない個人プロフィール", "セキュリティチェックのためログインできない", "https://www.facebook.com/help/contact/?id=179049432194862")
			break
		case "6":
			selfService("停止された個人プロフィール", "Personal Account Disabled", "https://www.facebook.com/help/contact/260749603972907")
			break
		case "7":
			selfService("コンテンツのブロック", "Facebookのブロック", "https://www.facebook.com/help/contact/571927962827151")
			break
		case "8":
			selfService("権利の侵害", "権利の侵害を報告", "https://www.facebook.com/help/contact/634636770043106")
			break
		case "9":
			selfService("ポリシー違反で広告できなくなったFacebookページ", "Request Review of Page Advertising Access", "https://www.facebook.com/help/contact/2158932601016581")
			break
		default:
	}
}

function selfService(issue, form, link){
	setTxtarea(`${issue}に関しましては、下記フォームよりご自身で異議申し立てを行っていただくことが可能でございます。\n\n【${form}】\n${link}`)
}

function setByEmail(obj){
	const byemail = obj.value
	const cusEmail = document.getElementById("cus-email").value
	let txt_setByEmail = ""
	if(byemail == "rep_longer" || byemail == "rep_shorter"){
		caseNo = document.getElementById("case-no").value
		if(caseNo.length == 0){
			window.alert("No Case ID!")
		}else{
			txt_setByEmail += byemail == "rep_shorter" ? '24-48時間ほど' : '頂きました情報につきましては、担当部署と共有し調査依頼をさせていただきます。\n調査内容にもより72時間以上'
			txt_setByEmail += "お時間頂く場合もございますが、アップデートあり次第、チャットで入力いただいたメールアドレス"
			txt_setByEmail += cusEmail.length > 0 ? `: ${cusEmail}`:""
			txt_setByEmail += "までご連絡をさせていただきます。\n" +
			`その前に、本件のアップデートが必要となりましたら、チャットにお越しいただき、本件のケースID:${caseNo}をお伝えくださいませ。\n` +
			"お急ぎの所、誠に恐縮ではございますが、今しばらくお待ちいただけますと幸いでございます。"
		}
	}else if (byemail == "sene"){
		txt_setByEmail = `この後、チャットで入力いただいたメールアドレス`
		txt_setByEmail += cusEmail.length > 0 ? `: ${cusEmail}`:""
		txt_setByEmail += `までメールをお送りしますので、そちらにご返信いただけますと幸いです。`
	}else if(byemail == "sente"){
		txt_setByEmail = `只今、チャットで入力いただいたメールアドレス`
		txt_setByEmail += cusEmail.length > 0 ? `: ${cusEmail}`:""
		txt_setByEmail += `までメールをお送りしましたので、そちらにご返信いただけますと幸いです。`
	}else if(byemail == "cc"){
			txt_setByEmail = `セキュリティ上の理由からこちらのシステムからはCCの追加ができなくなっております。\n` +
			"お客様の方でCCを追加したり、転送などのご対応が可能かと存じますので、そちらの方法でご対応いただけますと幸いです。\n" +
			"現在のEメールから別のEメールに変更することは可能でございます。"
	}else if(byemail == "difmail"){
		const difEmail = document.getElementById("cus-email2").value
		txt_setByEmail = "かしこまりました。担当部門から回答あり次第、"
		txt_setByEmail += difEmail.length > 0 ? `${difEmail}まで`:""
		txt_setByEmail += "ご連絡させていただきます。"
	}else if(byemail == "brokenemail"){
		txt_setByEmail = txt_broken_chat
		txt_setByEmail += `この後、`
		txt_setByEmail += cusEmail.length > 0 ? ` ${cusEmail}`:""
		txt_setByEmail += "メールをお送りしますので、そちらにご返信いただけますと幸いです。"
	}
	setTxtarea(txt_setByEmail)
}

function setPreClosing(obj){
	const preclose = obj.value
	let txt_preclose = ""
	if (preclose == "comeagain"){
		setTimeOfDay()
		txt_preclose = txt_cagain
		txt_preclose += txt_cagain2
		txt_preclose += "\n\n" + txt_tq2
	}else if(preclose == "tq1"){
		txt_preclose = txt_tq1
	}else if(preclose == "tq2"){
		txt_preclose = txt_tq2
	}else if(preclose == "tq3"){
		txt_preclose = txt_tq3
	}
	setTxtarea(txt_preclose)
}

function getTimeOfDay(){
	const today = new Date()
	const hours = today.getHours()
	const dow = today.getDay()
	let timeOfDay
	if(dow == 5 && hours>17){
		timeOfDay = "週末"
	}else{
		timeOfDay = "一日"
	}
	return timeOfDay
}

function setTimeOfDay(){
	const timeOfDay = getTimeOfDay()
	txt_cagain2 = `どうぞよい${timeOfDay}をお過ごしください!`
}

function getGreeting(){
	const today = new Date()
	const hours = today.getHours()
	let greeting
	if(hours<11){
		greeting = "おはようございます。"
	}else{
		greeting = "こんにちは！"
	}
	return greeting
}

function writeEmail(){
	let todate = document.getElementById("tday").value
	let txt_date = ""
	if(todate.length == 0){
		getDate()
		todate = document.getElementById("tday").value
	}
	if(todate.length > 0){
		const strMon = parseInt(todate.substring(5,7))
		const strDate = parseInt(todate.substring(8,10))
		txt_date = `${strMon}月${strDate}日`
	}

	let txt_mail = ""
	txt_mail += `【お問い合わせ番号: ${caseNo}】\n`
	txt_mail += `【お問い合わせ日: ${txt_date}】\n\n`
	txt_mail += `${txt_name}様\n\n`
	txt_mail += `いつもお世話になっております。Metaプロチームの西岡と申します。\n\n`

	setMailProb()
	account_id = document.getElementById("aid").value
	getPolVals()

	switch (mailType) {
		case "chatend":
			txt_mail += `本日は`
			txt_mail += txt_prob.length>0? `「${txt_prob}」に関して`:""
			txt_mail += `Metaプロチームにお問い合わせいただきありがとうございました。\n\n`
			txt_mail += txm_chatend + "\n\n"
			txt_mail += txm_anyissue + "\n\n"
			break
			case "chatend2":
				txt_mail += `本日は`
				txt_mail += txt_prob.length>0? `「${txt_prob}」に関して`:""
				txt_mail += `Metaプロチームにお問い合わせいただきありがとうございました。\n\n`
				txt_mail += `お問い合わせ番号${caseNo}に関してご連絡を差し上げております。\n\n`
				txt_mail += txm_NETRTPilot + "\n"
				txt_mail += "チャットをご退席されてしまった様でございましたので、いったんこちらのお問い合わせはクローズとさせていただきます。\n" +
				"引き続きご質問・ご懸念点がございましたら　www.facebook.com/business/help　よりお気軽にお問い合わせください。\n" +
				`対応可能なコンシェルジュが喜んで${txt_name}様を引き続きサポートさせて頂きます。`

				txt_mail += txm_anyissue + "\n\n"
				break
		case "errreply":
			txt_mail += `本日は`
			txt_mail += txt_prob.length>0? `「${txt_prob}」に関して`:""
			txt_mail += `Metaプロチームにお問い合わせいただきありがとうございました。\n\n`
			txt_mail += txt_apl6 + "\n\n"
			txt_mail += txm_invs + "\n\n"
			txt_mail += txm_wait2 + "\n\n"
			break
		case "videoen":
			txt_mail += `本日は`
			txt_mail += txt_prob.length>0? `「${txt_prob}」に関して`:""
			txt_mail += `Metaプロチームにお問い合わせいただきありがとうございました。\n\n`
			txt_mail += txt_prob.length>0? `この度は${txt_prob}とのこと、ご不便をおかけしております。\n\n`:""
			txt_mail += `誠にお手数ではございますが、開始からエラー（${txt_prob}）が発生するまでの一連の作業について、スクリーンキャプチャ（動画）を英語にていただけますと幸いです。\n\n`
			txt_mail += txt_changelng + "\n"
			txt_mail += txt_repro + "\n\n"
			txt_mail += txm_review + "\n\n"
			txt_mail += `担当部門より回答があり次第、`
			txt_mail += (txt_name.length > 0 ? `${txt_name}` : "お客")
			txt_mail += `様へご連絡させていただきます。\n\n`
			break
		case "additional":
			txt_mail += "先ほどのチャットでお伝えした内容が不十分でしたので改めてご連絡差し上げました。\n\n\nこの度は混乱を招き誠に申し訳ございませんでした。\n\n"
			txt_mail += txm_anyissue + "\n\n"
			break
		case "disabledaccnt":
			txt_mail += "お問い合わせいただきました「広告アカウントが停止」の件についてご連絡させていただいております。\n\n"
			txt_mail += `この度、突然広告アカウント（ID:${account_id}）が停止されてしまったとの事、大変ご不便をおかけしております。\n\n`
			txt_mail += txm_invs + "\n\n"
			txt_mail += txm_wait2 + "\n\n"
			break
		case "disapproved":
		case "pendingreview":
			const ad_status = mailType === "disapproved"?"非承認":"審査中"
			txt_mail += `本日は${ad_status}広告に関してチャットにお越し頂きありがとうございます。\n`
			txt_mail += "この度は、広告の審査についてご不便をおかけして申し訳ございません。\n\n"
			txt_mail += `広告アカウントID:${pol_aid}\n`
			txt_mail += `広告ID:\n${pol_ads}\n`
			txt_mail += `上記${ad_status}広告につきまして、審査担当部署に再審査を依頼しております。\n`
			txt_mail += `担当部門より回答があり次第、`
			txt_mail += (txt_name.length > 0 ? `${txt_name}` : "お客")
			txt_mail += `様にEメールにてご連絡さしあげます。\n\n`
			txt_mail += txm_wait2 + "\n\n"
			txt_mail += txm_anyissue + "\n\n"
			break
		case "chatbroken":
			txt_mail += `本日は`
			txt_mail += txt_prob.length>0? `「${txt_prob}」に関して`:""
			txt_mail += `Metaプロチームにお問い合わせいただきありがとうございました。\n\n`
			txt_mail += txt_broken_email
			txt_mail += "こちらのメールに詳細をご返信いただけましたら、引き続きご対応させていただきますね。または、再度チャットにお越しいただけますと幸いです。\n\n"
			txt_mail += txm_anyissue + "\n\n"
			break
	}
	txt_mail += txm_tqe + "\n\n"
	txt_mail += txm_tqfu + "\n\n"
	txt_mail += txm_sender + "\n"

	setMailarea(txt_mail)
}

function setMailProb(){
	txt_prob = document.getElementById("mail-prob").value
}

function setMailType(obj){
	mailType = obj.value
}

function setRef(){
	const atcl = document.getElementById("refarticle").value
	const rurl = document.getElementById("refurl").value
	txt_ref = ""
	txt_ref = `すでにご覧いただいているかと存じますが、改めて参考記事をご共有させていただきます。\n`
	txt_ref += `ご参考記事：\n`
	txt_ref += `【${atcl}】\n`
	txt_ref += `${rurl}`
	setTxtarea(txt_ref)

}

function setRefCon(){
	const atcl = document.getElementById("refarticle").value
	const rurl = document.getElementById("refurl").value
	txt_ref += `\n\n`
	txt_ref += `ご参考記事：\n`
	txt_ref += `【${atcl}】\n`
	txt_ref += `${rurl}`
	setTxtarea(txt_ref)

}

function setCloneSingle(){
	const clnContent = document.getElementById("clone-content").value
	const clnNum = document.getElementById("clone-num").value
	let txt_cl = ""
	txt_cl = `恐れ入りますが、【${clnContent}】に関しましては、別件でございますので、\n`
	txt_cl += `お問い合わせ番号：${clnNum} を作成させていただきました。\n`
	txt_cl += txt_svy_cl
	setTxtarea(txt_cl)
}

function setCloneMulti(){
	const clnContent = document.getElementById("clone-content").value
	const clnNum = document.getElementById("clone-num").value
	clncases.push({enquiry:clnContent, caseno:clnNum})
	displayArrayObjects(clncases)
}

function displayArrayObjects(arrayObjects) {
  const len = arrayObjects.length
	let text = ""

  for (let i = 0; i < len; i++) {
      const myObject = arrayObjects[i]

      for (var x in myObject) {
          text += ( x + ": " + myObject[x] + " ")
      }
      text += "<br/>"
  }
  document.getElementById("clonelog").innerHTML = text
}

function printClnCases(){
	txt_clone = ""
	for(i=0;i<clncases.length;i++){
		const strContent = clncases[i]['enquiry']
		const caseNum = clncases[i]['caseno']
		txt_clone += `【${strContent }】について　⇒　お問い合わせ番号：${caseNum}\n`
	}
	const txt_cloned_num = `本日は下記の${clncases.length}件についてお伺いいたしました。：\n`
	setTxtarea(txt_cloned_num + txt_clone + "\n" + txt_svy_cl)
}

function setMissingFunc(){
	let txt_suggestion = ""
	txt_suggestion += txt_wlcsgt1
	const missing_function = document.getElementById("missingfunc").value
	if (missing_function.length > 0){
		txt_suggestion += `${missing_function}`
	}else{
		txt_suggestion += `本件`
	}
	txt_suggestion += txt_wlcsgt2
	setTxtarea(txt_suggestion)
}

function setUnavailFunc(){
	let txt_unavail = ""
	txt_unavail  += "残念ながら"
	const missing_function = document.getElementById("missingfunc").value
	if (missing_function.length > 0){
		txt_unavail  += `${missing_function}`
	}else{
		txt_unavail  += `こちら`
	}
	txt_unavail  += txt_notavail
	setTxtarea(txt_unavail)
}

function setNoIntrEmail(){
	let txt_nointr_email = ""
	if(txt_email.length  > 0){
		txt_nointr_email = txm_nointr1 + txt_email + txm_nointr2
		setTxtarea(txt_nointr_email)
	}
}

function setNoIntrAftSol(){
	let txt_nointr = ""
	txt_nointr += txm_nointr3
	setTxtarea(txt_nointr)
}

function setNoIntrEndChat(){
	let txt_nointr = ""
	txt_nointr += txm_nointr4
	setTxtarea(txt_nointr)
}

function setSummary(){
	summary = document.getElementById("summary").value
	sum_q = document.getElementById("sumq").value
	sum_a = document.getElementById("suma").value
}

function printSummary(){
	setSummary()
	let txt_summary = ""
	txt_summary += `本日は`
	txt_summary += sum_a.length > 0 ? "下記" :  `${sum_q}`
	txt_summary += `の件についてご対応させて頂きました。`
	if(sum_a.length > 0){
		txt_summary += `\n【ご質問】`
		txt_summary += `${sum_q}`
		txt_summary += `\n【ご回答】`
		txt_summary += `${sum_a}`
	}
	setTxtarea(txt_summary)
}

function getPolVals(){
	pol_aid = document.getElementById("aid").value
	pol_ads = document.getElementById("ads-area").value
	pol_link = document.getElementById("pol-link").value
}

function setDisAdsMsg(status){
	const ad_status = status === "pendingreview"?"審査中":"非承認"
	let txt_policy = ""
	let txt_ecm = ""
	pol_aid = document.getElementById("aid").value
	pol_ads = document.getElementById("ads-area").value
	pol_link = document.getElementById("pol-link").value
	caseNo = document.getElementById("case-no").value
	cusEmail = document.getElementById("cus-email").value
	// txt_policy += `広告アカウントID：${pol_aid}\n`

	// txt_policy += `リンク：${pol_link}\n`
	if(status == "disabledaccount"){
		txt_policy += `上記停止となった広告アカウント: ${pol_aid} につきまして、こちらから審査担当部署に別途審査を依頼し、\n`
	}else{
		txt_policy += `広告ID：\n${pol_ads}\n`
		txt_policy += `上記${ad_status}広告につきまして、こちらから審査担当部署に別途審査を依頼し、\n`
	}

	txt_policy += `返信あり次第チャットで入力いただいたメールアドレス`
	txt_policy += cusEmail.length > 0 ?`: ${cusEmail}`:""
	txt_policy += `までメールにてご連絡差し上げますね。\n通常24-48時間以内に途中経過の第一報を差し上げております。`
	txt_policy += `\nその前に、本件のアップデートが必要となりましたら、チャットにお越しいただき、本件のケースID:${caseNo}をお伝えくださいませ。`
	txt_policy += "お急ぎの所、誠に恐縮ではございますが、今しばらくお待ちいただけますと幸いでございます。"

	setAreas(txt_policy, "pol-area")
	escType = "1"
	setEscMsg()
}

function setHelpAppeal(){
	let txt_policy = ""
	txt_policy += txt_appeal
	txt_policy += (txt_name.length > 0 ? `${txt_name}` : "お客")
	txt_policy +=　`様のお役に立てるよう、こちらからも別途審査を依頼させていただきます。\n\n`

	setAreas(txt_policy, "pol-area")
}

function setEscType(obj){
	escType = obj.value
	setEscMsg()
}

function setEscMsg(){
	const aid = document.getElementById("aid").value
	const bid = document.getElementById("bid").value
	const uid  = document.getElementById("uid").value
	pol_ads = document.getElementById("ads-area").value
	pol_link = document.getElementById("pol-link").value
	if (escType == "1" || escType == "2" || escType == "10" || escType == "11"){
		if(escType == "1"){
			txt_ecm = "== Disapproved Ads ==\n"
			txt_ecm += "Please review ads below.Thank you!\n"
		}else if(escType == "2"){
			txt_ecm = "== Pending Review ==\n"
			txt_ecm += "Please approve the pending-review ads below.Thank you!\n"
		}else if(escType == "10"){
			txt_ecm = "== Text Alert ==\n"
			txt_ecm += "Please exempt the ads below from Text penalty.\n"
		}else{
			txt_ecm = "== Low Quality alert ==\n"
		}
		const managed = document.querySelector('input[name="manage"]:checked').value
		if(managed == 1){
			txt_ecm += `Managed \n`
		}else{
			txt_ecm += `Unmanaged \n`
		}
		txt_ecm += `*AID\n${aid}\n`
		txt_ecm += `*Ad IDs\n${pol_ads}\n`
		txt_ecm += `*Link \n${pol_link}\n`

	}else if(escType == "3" || escType == "4"){
		if(escType == "3"){
			txt_ecm = "= Disabled Ad account (Risk) =\n"
		}else{
			txt_ecm = "= Disabled Ad account (Policy)=\n"
		}
		txt_ecm += "Escalated\nTier: \n\n"
		txt_ecm += `AID : ${aid}\n`
	}else if(escType == "5"){
		txt_ecm = txt_ccwhitelist
		txt_ecm += `UID : ${uid}\n`
	}else if(escType == "6"){
		txt_ecm = "= Daily Spend Limit =\n"
		txt_ecm += `Account ID: ${aid}\n`
		txt_ecm += `User ID: ${uid}\n`
		txt_ecm += txt_spendlimit
	}else if(escType == "7"){
		txt_ecm = txt_sme
	}else if(escType == "8"){
		txt_ecm = txt_ccfailed
		txt_ecm += `UID : ${uid}\n`
	}else if(escType == "9"){
		txt_ecm = txt_mvsinternal
		txt_ecm += `4) Ad account ID: ${aid} \n`
		txt_ecm += `5) User ID: ${uid} \n`
		txt_ecm += `6) Business Manager ID: ${bid}\n`
		txt_ecm += "7) Page ID: \n\n"
		txt_ecm += txt_task_init
	}else if(escType == "12"){
		txt_ecm = txt_prereview
	}else if(escType == "13"){
		txt_ecm = txt_pre_req
	}else if(escType == "14"){
		txt_ecm = txt_esc_precheck
	}
	document.getElementById("ecm-area").value = txt_ecm
}

function setIssueStatus(){
	const issue = document.getElementById("issue-area").value
	const jid = document.getElementById("job-id").value
	txt_ecm = "==Issue==\n"
	txt_ecm += issue + '\n\n'
	txt_ecm += "==Current status==\n"
	txt_ecm += `BPS: Job ID ${jid}で確認中\n\n`
	txt_ecm += "==next action==\n"
	txt_ecm += "部署からの回答後にユーザに連絡。"
	document.getElementById("ecm-area").value = txt_ecm
}

function setDup(obj){
	let txt_dup = ""
	const dup = obj.value
	const dupcase = document.getElementById("dup-case").value
	if(dupcase.length >0){
		if(dup == "1"){
			txt_dup = `お預りしておりますお問い合わせ番号：${dupcase}についてでございますが、大変恐れ入りますが現在も担当部署からの回答待ちとなっております。\n\n`
			txt_dup += txt_dup_nores
		}else if(dup == "2"){
			txt_dup = `本件については引き続きお問い合わせ番号：${dupcase}にてご対応させていただきます。`
		}else if(dup == "3"){
			txt_dup = `#Dup(${dupcase})`
		}
	}
	setTxtarea(txt_dup)
}

function logTxt(strlog){
	conv_log += "<span class='log'>" + strlog + "<br />---------------------------<br />" + "</span>"
	document.getElementById("output-log").innerHTML = conv_log
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block"
  evt.currentTarget.className += " active"
}

function _submit(){
  const caseDate = document.getElementById("tday").value
  // セッションストレージに一時保存
  sessionStorage.setItem("caseDate",caseDate)
  sessionStorage.setItem("cusName",txt_name)
  sessionStorage.setItem("caseNo",caseNo)
  sessionStorage.setItem("summary",summary)
  sessionStorage.setItem("pol_aid",pol_aid)
  sessionStorage.setItem("pol_link",pol_link)
  sessionStorage.setItem("pol_ads",pol_ads)
  return true
}

function setShortcut(sctype){
	const str = document.getElementById("shortcut").value
	let scurl
	switch (sctype) {
		case "catalog":
			scurl = "https://business.intern.facebook.com/products/catalogs/" + str + "/products"
			break
		case "am":
			scurl = "https://business.intern.facebook.com/adsmanager/manage/campaigns?act=" + str
			break
		case "crm":
			scurl = "https://our.intern.facebook.com/intern/crm/relay/platform?section=business_graph_explorer&id=" + str
			break
		case "fbcom":
			scurl = "fb.com/" + str
			setTxtarea(scurl)
			break
		case "bmset":
			scurl = "https://business.intern.facebook.com/settings/?business_id=" + str
			break
		case "ig":
			scurl = "https://www.instagram.com/" + str
			break
		case "task":
			scurl = "https://our.intern.facebook.com/intern/tasks/?t=" + str
			break
		case "kb":
			scurl = "https://review.intern.facebook.com/intern/gms/km/knowledge_base/entry/" + str
			break
		case "team":
			scurl = `https://our.intern.facebook.com/intern/crm/relay/ad_account/${str}/brand_teams`
			break
		case "pixel2":
			scurl = "https://business.intern.facebook.com/events_manager2/list/pixel/?business_id=" + str
			break
		case "transactions":
			scurl = "https://www.intern.facebook.com/ads/manager/billing/transactions/?act=" + str
			break
		case "billing_settings":
			scurl = `https://www.intern.facebook.com/ads/manager/account_settings/account_billing/?act=${str}&pid=p1&page=account_settings&tab=account_billing_settings`
			break

		default:

	}
	// setTxtarea(scurl)
	window.open(scurl, '_blank')
}

function goToBrandTeam(){
	const aid = document.getElementById("aid").value
	// const scurl = `https://our.intern.facebook.com/intern/crm/relay/ad_account/${aid}/brand_teams`
	const scurl = `			https://our.intern.facebook.com/intern/crm/relay/platform?section=search&entity_profile=${aid}&entity_profile_section=brand_teams&click_from=entity_pane`
	// setTxtarea(scurl)
	window.open(scurl, '_blank')
}

splitByLine = function() {
    var text  = document.getElementById('myTextarea').value.replace(/\r\n|\r/g, "\n")
    var objVariables = JSON.parse(text)

    // alert(JSON.stringify(objVariables))
		document.getElementById("case-no").value = objVariables["caseNum"]
		caseNo = objVariables["caseNum"]
		document.getElementById("cus-name").value = objVariables["cusName"]
		txt_name = objVariables["cusName"]
		document.getElementById("cus-email").value = objVariables["email"]
		document.getElementById("cus-email2").value = objVariables["email"]
		txt_email = objVariables["email"]
		document.getElementById("aid").value = objVariables["aid"]
		account_id = objVariables["aid"]
		document.getElementById("bid").value = objVariables["bid"]
		document.getElementById("uid").value = objVariables["uid"]
		document.getElementById("summary").value = objVariables["summary"]
		summary = objVariables["summary"]
		// document.getElementById("pol-aid").value = objVariables["aid"]
		pol_aid =  objVariables["aid"]
		document.getElementById("ads-area").value = objVariables["ads"]
		pol_ads = objVariables["ads"]
		document.getElementById("pol-link").value = objVariables["link"]
		pol_link = objVariables["link"]
		escType = objVariables["esctype"]
		contStatus = objVariables["cont"]
		if(objVariables["managed"] == 1){
			document.getElementById("manage-true").checked = true
		}else if(objVariables["managed"] == 0){
			document.getElementById("manage-false").checked = true
		}
}

printJson = function() {
    var objVariables = {}
		objVariables["caseDate"] = document.getElementById("tday").value
		objVariables["caseNum"] = document.getElementById("case-no").value
		objVariables["cusName"] = document.getElementById("cus-name").value
		objVariables["email"] = document.getElementById("cus-email").value

		objVariables["aid"] = document.getElementById("aid").value
 		objVariables["bid"] = document.getElementById("bid").value
		objVariables["uid"] = document.getElementById("uid").value
		objVariables["summary"] = document.getElementById("summary").value
		objVariables["ads"] = document.getElementById("ads-area").value
		objVariables["link"] =document.getElementById("pol-link").value
		setTxtarea(JSON.stringify(objVariables))
}

checkFlash = function() {
	if(!document.getElementById("checkflash").checked){
		// document.getElementById("caseinfo").style.backgroundColor = "coral"
		document.getElementById("caseinfo").style.animation = "blinking 1.5s infinite"
	}else{
		document.getElementById("caseinfo").style.animation = ""
	}
}

/*
	here
*/

function getDate() {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth()+1 //January is 0!
  var yyyy = today.getFullYear()

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  txt_today = yyyy + '-' + mm + '-' + dd
  document.getElementById("tday").value = txt_today
}

function showTday(){
	console.log(document.getElementById("tday").value)
}
// This returns the selected object in a radiobutton array
function getOption(arr) {
  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].checked) return arr[i]
  }
  return null
}

function caseClear(){
	caseNo = undefined
	contStatus = undefined
	prob = undefined
	mailType = undefined
	escType = undefined

	txt_cagain2 = ''
	txt_tier = ''
	txt_closing = ""
	txt_ack = ""
	txt_name = ""
	txt_email = ""
	txt_prob = ""
	txt_ref = ""
	txt_summary = ""
	conv_log = ""

	waitmin = 5
	clncases = []

	clearTxtarea()

	document.getElementById("cus-name").value = ""
	document.getElementById("case-no").value = ""
	document.getElementById("cus-email").value = ""
	document.getElementById("cus-email2").value = ""
	document.getElementById("prob").value = ""
	document.getElementById("adaccount-id").value = ""
	document.getElementById("minute").value = "5～10"
	document.getElementById("mail-prob").value = ""
	document.getElementById("mail-area").value = ""
	document.getElementById("refarticle").value = ""
	document.getElementById("refurl").value = ""
	document.getElementById("missingfunc").value = ""
	document.getElementById("clone-content").value = ""
	document.getElementById("clone-num").value = ""
	document.getElementById("clone-total").value = ""
	document.getElementById("pol-aid").value = ""
	document.getElementById("ads-area").value = ""
	document.getElementById("pol-link").value = ""
	document.getElementById("pol-area").value = ""
	document.getElementById("ecm-area").value = ""
	document.getElementById("summary").value = ""
	document.getElementById("sumq").value = ""
	document.getElementById("suma").value = ""
	document.getElementById("shortcut").value = ""
	document.getElementById("aid").value = ""
	document.getElementById("uid").value = ""
	document.getElementById("bid").value = ""


	document.getElementById("tday").value = undefined

	document.getElementById("tier_NA").checked = false
	document.getElementById("tier_GSO").checked = false
	document.getElementById("tier_SMB").checked = false

	document.getElementById("cont_done").checked = false
	document.getElementById("cont_email").checked = false
	document.getElementById("cont_update").checked = false
	document.getElementById("cont_dup").checked = false
	document.getElementById("cont_incv").checked = false

	document.getElementById("preclose_ca").checked = false
	document.getElementById("preclose_tq1").checked = false
	document.getElementById("preclose_tq2").checked = false
	document.getElementById("preclose_tq3").checked = false

	document.getElementById("ackn_aplg").checked = false
	document.getElementById("ackn_dtl1").checked = false
	document.getElementById("ackn_dtl2").checked = false
	document.getElementById("ackn_dtl3").checked = false
	document.getElementById("ackn_dtl4").checked = false
	document.getElementById("ackn_abt").checked = false
	document.getElementById("ackn_bracket").checked = false
	document.getElementById("ackn_bracrct").checked = false
	document.getElementById("ackn_bracrct2").checked = false
	document.getElementById("ackn_bracfm").checked = false
	document.getElementById("ackn_brawait").checked = false
	document.getElementById("ackn_bralstn").checked = false
	document.getElementById("ackn_video").checked = false
	document.getElementById("ackn_wish").checked = false
	document.getElementById("ackn_inq").checked = false


	document.getElementById("byemail_reply").checked = false
	document.getElementById("byemail_send").checked = false
	document.getElementById("byemail_sent").checked = false
	document.getElementById("byemail_cc").checked = false

	document.getElementById("nointr_ikaga").checked = false
	document.getElementById("nointr_oiso").checked = false
	document.getElementById("nointr_ira").checked = false
	document.getElementById("nointr_tunaga").checked = false
	document.getElementById("nointr_gokaku").checked = false
	document.getElementById("nointr_system").checked = false
	document.getElementById("nointr_taiseki").checked = false
	document.getElementById("nointr_email").checked = false

	document.getElementById("mail_chatend").checked = false
	document.getElementById("mail_chatbroken").checked = false
	document.getElementById("mail_errreply").checked = false
	document.getElementById("mail_videoen").checked = false
	document.getElementById("mail_additional").checked = false
	document.getElementById("mail_disabled").checked = false
	document.getElementById("mail_disapproved").checked = false
	document.getElementById("mail_pending").checked = false

	document.getElementById("esc-disapproved").checked = false
	document.getElementById("esc-pending").checked = false
	document.getElementById("esc-accrisk").checked = false
	document.getElementById("esc-accpolicy").checked = false
	document.getElementById("esc-cc").checked = false
	document.getElementById("esc-limit").checked = false
	document.getElementById("esc-sme").checked = false
	document.getElementById("esc-failed").checked = false
	document.getElementById("esc-text").checked = false
	document.getElementById("esc-lowq").checked = false
	document.getElementById("esc-precheck").checked = false
	document.getElementById("esc-precheckreq").checked = false


	document.getElementById("more").checked = false
	document.getElementById("recap").checked = false
	document.getElementById("check90").checked = false
	document.getElementById("checkflash").checked = false

	document.getElementById("dup-no-res").checked = false
	document.getElementById("dup-prevcase").checked = false
	document.getElementById("dup-tag").checked = false

	document.getElementById("info1").selectedIndex = 0

	document.getElementById("output-log").innerHTML = ""

	getDate()
}

function uncheckAll(f){
	for (x=0;x<f.elements.length;x++){
		if (f.elements[x].type == "radio"){
			f.elements[x].checked = false
		}
	}
}

function setTxtarea(str){
	document.getElementById("myTextarea").value = str
	if(execCopy(str)){
		alert('コピーできました\n'+"----------------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
	logTxt(str)
}


function setAreas(str, tarea){
	document.getElementById(tarea).value += "\n\n" + str
	if(execCopy(str)){
		alert('コピーできました\n'+"----------------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
	logTxt(str)
}

function clearTxtarea(){
	document.getElementById("myTextarea").value = ""
}

function clearAreas(tarea){
	document.getElementById(tarea).value = ""
}

function setMailarea(str){
	document.getElementById("mail-area").value = str
	if(execCopy(str)){
		alert('メール文をコピーできました\n'+"----------------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
}

function copytext(){
	const str = document.getElementById("myTextarea").value
	if(execCopy(str)){
		alert('コピーできました\n'+"-----------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
	logTxt(str)
}

function copyTexts(tarea){
	const str = document.getElementById(tarea).value
	if(execCopy(str)){
		alert('コピーできました\n'+"-----------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
}

function execCopy(string){
  var temp = document.createElement('div')

  temp.appendChild(document.createElement('pre')).textContent = string

  var s = temp.style
  s.position = 'fixed'
  s.left = '-100%'

  document.body.appendChild(temp)
  document.getSelection().selectAllChildren(temp)

  var result = document.execCommand('copy')

  document.body.removeChild(temp)
  // true なら実行できている falseなら失敗か対応していないか
  return result
}
